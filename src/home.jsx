import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Col, Row, Flex, Divider, Form, Input, Button, Grid } from "antd";
//import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay } from "swiper/modules";
import axios from "axios";
//import "swiper/css";
//import "swiper/css/autoplay";
// import Swiper1 from "../public/assets/Slider1.png";
// import Swiper2 from "../public/assets/Slider2.png";
// import Swiper3 from "../public/assets/Slider3.png";
// import Swiper4 from "../public/assets/Slider4.png";

import { useEffect, useState } from "react";
const { useBreakpoint } = Grid;
const Home = () => {
	const [data, setData] = useState([]);
	const screen = useBreakpoint();
	const updateCapital = (word) =>
		word
			.split("-")
			.map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
			.join(" ");
	const Deals = [
		{ id: 1, From: "Mumbai", To: "Chennai", Price: "3,200 Rs" },
		{ id: 2, From: "Mumbai", To: "Bangalore", Price: "4,300 Rs" },
		{ id: 3, From: "Delhi", To: "Mumbai", Price: "5,100 Rs" },
		{ id: 4, From: "Delhi", To: "Bangalore", Price: "5,600 Rs" },
	];
	const navigateUser = useNavigate();
	const handleFlight = async (v) => {
		navigateUser(`/${updateCapital(v.start)}-${updateCapital(v.destination)}`);
	};
	const getMyTickets = async () => {
		try {
			const res = await axios.get("http://13.203.150.86/get-my-tickets", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			setData(res.data);
			console.log(res.data);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		console.log("get");
		getMyTickets();
	}, []);
	return (
		<>
			<div style={{ height: "29rem", backgroundColor: "#f2f2f2", paddingTop: "2rem" }}>
				{/* <Swiper
					//modules={[Autoplay]}
					loop={true}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
				>
					<SwiperSlide>
						<img
							src={Swiper1}
							style={{ width: "100vw", height: "25rem", objectFit: "cover" }}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={Swiper2}
							style={{ width: "100vw", height: "25rem", objectFit: "cover" }}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={Swiper3}
							style={{ width: "100vw", height: "25rem", objectFit: "cover" }}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={Swiper4}
							style={{ width: "100vw", height: "25rem", objectFit: "cover" }}
						/>
					</SwiperSlide>
				</Swiper> */}
			</div>
			{/* <Divider style={{margin:"0",borderColor:"black"}}/> */}
			<Row className="title">
				<h1 style={{ backgroundColor: "#f2f2f2", color: "black" }}>
					Book your flight here
				</h1>
			</Row>
			<div className="home">
				<div
					style={{
						backgroundColor: "#f2f2f2",
						width: "100vw",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Flex className="homeCard">
						<Form style={{ width: "90%" }} onFinish={handleFlight}>
							<Row style={{ width: "100%" }}>
								<Col xs={24} md={8}>
									<Form.Item
										name="start"
										label={<span>From (city)</span>}
										rules={[
											{
												required: true,
												message: "Please enter your trip start location",
											},
										]}
										style={{
											margin: screen.md ? "0 0 0 1rem" : "1rem 1rem 0 1rem",
											width: "90%",
										}}
									>
										<Input label="From"></Input>
									</Form.Item>
								</Col>
								<Col xs={24} md={8}>
									<Form.Item
										name="destination"
										label={<span>To (city)</span>}
										rules={[
											{
												required: true,
												message: "Please enter your trip end location",
											},
										]}
										style={{
											margin: screen.md
												? "0 0 0 1rem"
												: "1rem 1rem 1rem 1rem",
											width: "90%",
										}}
									>
										<Input label="To"></Input>
									</Form.Item>
								</Col>
								<Col
									xs={24}
									md={8}
									style={{ display: "flex", justifyContent: "center" }}
								>
									<Button htmlType="submit" id="search">
										Search
									</Button>
								</Col>
							</Row>
						</Form>
					</Flex>
					<Row
						style={{
							height: "auto",
							width: "100%",
							marginTop: "2rem",
							backgroundColor: "#f2f2f2",
							fontSize: "1.5rem",
						}}
					>
						<marquee style={{ backgroundColor: "#f2f2f2" }}>
							<FontAwesomeIcon
								icon={faCircle}
								style={{
									height: "0.5rem",
									paddingBottom: "0.5rem",
									backgroundColor: "#f2f2f2",
								}}
							/>{" "}
							Get{" "}
							<span style={{ backgroundColor: "#f2f2f2", color: "rgb(75,75,246)" }}>
								20%
							</span>{" "}
							discount on family booking.
							<FontAwesomeIcon
								icon={faCircle}
								style={{
									height: "0.5rem",
									padding: "0 0 0.5rem 3rem",
									backgroundColor: "#f2f2f2",
								}}
							/>{" "}
							Buy Two flight tickets in a{" "}
							<span style={{ backgroundColor: "#f2f2f2", color: "rgb(75,75,246)" }}>
								discounted
							</span>{" "}
							price.
							<FontAwesomeIcon
								icon={faCircle}
								style={{
									height: "0.5rem",
									padding: "0 0 0.5rem 3rem",
									backgroundColor: "#f2f2f2",
								}}
							/>{" "}
							Get a cashback upto{" "}
							<span style={{ backgroundColor: "#f2f2f2", color: "rgb(75,75,246)" }}>
								500 Rs
							</span>{" "}
							for each 5000 Rs+ purchase.
						</marquee>
					</Row>
				</div>
			</div>
			<Row className="Tickets">
				<Col
					xs={24}
					md={12}
					style={{
						backgroundColor: "#f2f2f2",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<div className="myTicket" id="my1" style={{ height: "50vh" }}>
						<Row
							style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}
						>
							<h2>My Bookings</h2>
						</Row>
						<Divider style={{ borderColor: "rgb(185, 185, 185)" }} />
						<Row>
							<div id="deals">
								<table>
									<thead>
										<tr style={{ fontSize: "1rem" }}>
											<th
												style={{
													backgroundColor: "rgb(96,96,255)",
													color: "#fff",
													width: "33%",
												}}
											>
												From
											</th>
											<th
												style={{
													backgroundColor: "rgb(96,96,255)",
													color: "#fff",
													width: "33%",
												}}
											>
												To
											</th>
											<th
												style={{
													backgroundColor: "rgb(96,96,255)",
													color: "#fff",
													width: "34%",
												}}
											>
												Seats
											</th>
										</tr>
									</thead>
									<tbody style={{ fontSize: "1rem" }}>
										{data.map((d, index) => (
											<tr key={index} style={{ textAlign: "center" }}>
												<td>{d.start}</td>
												<td>{d.destination}</td>
												<td>
													{d.seat.map((e, idx) => (
														<span key={idx}>{e} </span>
													))}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</Row>
					</div>
				</Col>
				<Col
					xs={24}
					md={12}
					style={{
						backgroundColor: "#f2f2f2",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<div className="myTicket" id="my2" style={{ height: "50vh" }}>
						<Row
							style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}
						>
							<h2>Today's Best Deals</h2>
						</Row>
						<Divider style={{ borderColor: "rgb(185, 185, 185)" }} />
						<Row>
							<div id="deals">
								<table>
									<thead>
										<tr style={{ fontSize: "1rem" }}>
											<th
												style={{
													backgroundColor: "rgb(96,96,255)",
													color: "#fff",
													width: "33%",
												}}
											>
												From
											</th>
											<th
												style={{
													backgroundColor: "rgb(96,96,255)",
													color: "#fff",
													width: "33%",
												}}
											>
												To
											</th>
											<th
												style={{
													backgroundColor: "rgb(96,96,255)",
													color: "#fff",
													width: "34%",
												}}
											>
												Price
											</th>
										</tr>
									</thead>
									<tbody style={{ fontSize: "1rem" }}>
										{Deals.map((deal) => (
											<tr key={deal.id} style={{ textAlign: "center" }}>
												<td>{deal.From}</td>
												<td>{deal.To}</td>
												<td>{deal.Price}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</Row>
					</div>
				</Col>
			</Row>
		</>
	);
};
export default Home;
