import {Row,Col, Card,Form,Input,Divider, Button,message} from "antd";
import musicImage from "./assets/music.png";
import { Checkbox } from 'antd';
import { useState } from "react";
import Password from "antd/es/input/Password";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Login = () =>{
    const [remember, setRemember] = useState(false);
    const navigateUser = useNavigate();  
    const handleChange = (e) =>{
        setRemember(e.target.checked);
    }
    const onLogin = async(v) =>{
        try{
        const values = {...v};
        console.log(values)
        const res= await axios.post("http://13.203.150.86/login",values);
        if(res){
            message.success("logged in");
        }
       
        navigateUser("/home")
        }
        catch(error){
            console.log(error.response.data.message);
            message.error(error.response.data.message)
           
        }
    }
    return(
        <>
        <Form onFinish={onLogin}>
        <Row>
            <Col xs={24} md={12}>
            <div id="image">
            <img 
            src={musicImage}
             alt="music"
             style={{height:"25rem",width:"25rem"}}
            />
            </div>
            </Col>
            <Col xs={24} md={12}>
            <Card className="loginCard">
                <Row>
                    <Col>
                    <h2>LOGIN</h2>
                    </Col>
                </Row>
                <Divider />
                <Row>
                <Col xs={24} md={24}>
                <Form.Item
                name="email"
                label={<span>Email</span>}
                rules={[
                    {
                        required:true,
                        message:"Please enter your Email",
                        unique:true,
                    }
                ]}>
                    <Input placeholder="Email"></Input>
                </Form.Item>
                </Col>
                </Row>
               
                <Row>
                <Col xs={24} md={24}>
                <Form.Item
                name="password"
                label={<span>Password</span>}
                rules={[
                    {
                        type:Password,
                        required:true,
                        message:"Please enter your Password"
                    }
                ]}>
                    <Input.Password placeholder="Password"></Input.Password>
                </Form.Item>
                </Col>
                </Row>
                <Row>
                    <a href="forgotPassword">Forgot your password?</a>
                </Row>
                <Divider />
                <Row>
                    <Col xs={24} md={24}>
                    <Button htmlType="submit">Login</Button>
                    </Col>
                </Row>
                <Row>
                <Checkbox style={{marginTop:"1rem"}} onChange={handleChange}>
                    Remember me
                </Checkbox>
                </Row>
                <Row>
                    <span style={{marginTop:"1rem"}}>Do not have an Account?</span>
                    <a href="/signup" style={{marginTop:"1rem"}}>Signup</a>
                </Row>

            </Card>
            </Col>
        </Row>
        </Form>
        </>
    )
}

export default Login;