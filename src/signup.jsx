import { Row, Col, Card, Form, Input, Divider, Button, message } from "antd";
import ticketImage from "./assets/ticket.png";
import { Checkbox } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
	const [terms, setTerms] = useState(false);
	const navigateUser = useNavigate();
	const handleChange = (e) => {
		setTerms(e.target.checked);
		console.log(e.target.checked);
	};
	const onFinish = async (v) => {
		try {
			try {
				const values = { ...v };
				console.log(values);
				const res = await axios.post("http://localhost:5000/signup", values);
				message.success("Signed up successfully");
				navigateUser("/login");
				console.log(res);
			} catch (error) {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Form onFinish={onFinish}>
				<Row>
					<Col xs={24} md={12}>
						<div id="image">
							<img
								src={ticketImage}
								alt="ticket"
								style={{ height: "25rem", width: "30rem" }}
							/>
						</div>
					</Col>
					<Col xs={24} md={12}>
						<Card className="loginCard">
							<Row>
								<Col>
									<h2>SIGNUP</h2>
								</Col>
							</Row>
							<Divider />
							<Row>
								<Col xs={24} md={24}>
									<Form.Item
										name="username"
										label={<span>Username</span>}
										rules={[
											{
												required: true,
												message: "Please enter your Username",
											},
										]}
									>
										<Input placeholder="Username"></Input>
									</Form.Item>
								</Col>
							</Row>

							<Row>
								<Col xs={24} md={24}>
									<Form.Item
										name="email"
										label={<span>Email</span>}
										rules={[
											{
												required: true,
												message: "Please enter your Email",
												unique: true,
											},
										]}
									>
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
												required: true,
												message: "Please enter your Password",
											},
										]}
									>
										<Input.Password placeholder="Password"></Input.Password>
									</Form.Item>
								</Col>
							</Row>

							<Divider />
							<Row>
								<Col xs={24} md={24}>
									<Button
										htmlType="submit"
										style={{ backgroundColor: "rgb(96, 96, 255)" }}
									>
										Sign up
									</Button>
								</Col>
							</Row>
							<Row>
								<Checkbox style={{ marginTop: "1rem" }} onChange={handleChange}>
									I have read all the terms and conditions and I accept.
								</Checkbox>
							</Row>
						</Card>
					</Col>
				</Row>
			</Form>
		</>
	);
};

export default Signup;
