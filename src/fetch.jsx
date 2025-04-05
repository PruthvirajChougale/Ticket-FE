import { Button,Card } from "antd";
import axios from "axios";
import { useState } from "react";
const FetchData = () => {
    const [data,setData] = useState([]);
    const fetchUsers =async () => {
        try{
            const res=await axios.get("http://13.203.150.86/get-data");
            setData(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <>
        <Button onClick={fetchUsers}>Get Users</Button>
        {
        data.map((m,index)=>{
           return <Card key={index}>{m.username}</Card>
        })}
        </>
    )
}
export default FetchData;