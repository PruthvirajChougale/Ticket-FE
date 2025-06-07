import { Button, Card } from "antd";
import axios from "axios";
import { useState } from "react";
const FetchData = () => {
	const [data, setData] = useState([]);
	const fetchUsers = async () => {
		try {
			console.log("ho");
			//const res=await axios.get("http://13.203.150.86:5000/get-data");
			const res = await axios.get("http://localhost:5000/get-data");
			setData(res.data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<Button onClick={fetchUsers}>Get Users</Button>
			<div style={{ maxHeight: "100vh", overflowY: "scroll" }}>
				{data.map((m, index) => {
					return <Card key={index}>{m.username}</Card>;
				})}
			</div>
		</>
	);
};
export default FetchData;
