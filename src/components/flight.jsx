import axios from "axios";
import { Row, Col, Form, Input, Select, DatePicker, TimePicker, Button, message } from "antd";
import { useEffect, useState } from "react";
import socket from "../socket";
import { useParams } from "react-router-dom";
const BookFlight = () => {
	const { path } = useParams();
	const [from, to] = path.split("-");
	const { Option } = Select;
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [bookedSeats, setBookedSeats] = useState([]);

	const [Seats, setSeats] = useState({
		A1: "available",
		A2: "available",
		B1: "available",
		B2: "available",
		C1: "available",
		C2: "available",
		C3: "available",
		D1: "available",
		D2: "available",
		D3: "available",
		E1: "available",
		E2: "available",
		E3: "available",
		F1: "available",
		F2: "available",
		F3: "available",
		G1: "available",
		G2: "available",
		G3: "available",
	});

	const handleSeat = async (seatId) => {
		if (Seats[seatId] === "available") {
			setSelectedSeats((prev) =>
				prev.includes(seatId) ? prev.filter((id) => id !== seatId) : [...prev, seatId]
			);
		}
		console.log(selectedSeats);
	};

	useEffect(() => {
		const fetchedTickets = async () => {
			console.log("fr", from, to);
			const res = await axios.get("http://13.203.150.86:5000/get-tickets", {
				params: { from, to },
			});
			const bookedTicketID = res.data.ticketID;
			console.log(bookedTicketID);
			setSeats((prevSeats) => {
				const updatedSeats = { ...prevSeats };
				bookedTicketID.forEach((seat) => {
					updatedSeats[seat] = "booked";
				});
				return updatedSeats;
			});
		};
		fetchedTickets();
	}, []);

	useEffect(() => {
		const handle = (newbooked) => {
			setSeats((prevSeats) => {
				const updatedSeats = { ...prevSeats };
				newbooked.forEach((seat) => {
					updatedSeats[seat] = "booked";
				});
				return updatedSeats;
			});
		};

		socket.on("bookedSeats", handle);

		return () => {
			socket.off("bookedSeats", handle);
		};
	}, []);

	const handleBook = async (v) => {
		try {
			const updatedSeats = { ...Seats };
			selectedSeats.forEach((seat) => (updatedSeats[seat] = "booked"));
			setSeats(updatedSeats);
			setBookedSeats(selectedSeats);
			setSelectedSeats([]);
			const timeString = v.time.format("HH:mm:ss");
			const dateString = v.date.format("YYYY-MM-DD");
			const values = {
				...v,
				seat: selectedSeats,
				time: timeString,
				date: dateString,
				ticketID: selectedSeats,
				start: from,
				destination: to,
			};
			console.log(values);
			const res = await axios.post("http://13.203.150.86:5000/book-flight", values, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			message.success(JSON.stringify(res.data));
		} catch (err) {
			message.error(JSON.stringify(err.message));
		}
	};

	return (
		<>
			<Row style={{ width: "100vw" }}>
				<Col xs={24} md={12} className="flight-class">
					<Row>
						<h3 style={{ display: "block" }}>Business Class</h3>
					</Row>
					<Row>
						<div>
							<div className="business">
								<Row>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("A1")}
											style={{
												backgroundColor:
													Seats["A1"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("A1")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											A1
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("A2")}
											style={{
												backgroundColor:
													Seats["A2"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("A2")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											A2
										</div>
									</Col>
								</Row>
								<Row>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("B1")}
											style={{
												backgroundColor:
													Seats["B1"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("B1")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											B1
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("B2")}
											style={{
												backgroundColor:
													Seats["B2"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("B2")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											B2
										</div>
									</Col>
								</Row>
								<Row>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("C1")}
											style={{
												backgroundColor:
													Seats["C1"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("C1")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											C1
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("C2")}
											style={{
												backgroundColor:
													Seats["C2"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("C2")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											C2
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Row>
					<Row>
						<h3 style={{ display: "block" }}>Economy Class</h3>
					</Row>
					<Row>
						<div>
							<div className="business">
								<Row>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("D1")}
											style={{
												backgroundColor:
													Seats["D1"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("D1")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											D1
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("D2")}
											style={{
												backgroundColor:
													Seats["D2"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("D2")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											D2
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("D3")}
											style={{
												backgroundColor:
													Seats["D3"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("D3")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											D3
										</div>
									</Col>
								</Row>
								<Row>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("E1")}
											style={{
												backgroundColor:
													Seats["E1"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("E1")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											E1
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("E2")}
											style={{
												backgroundColor:
													Seats["E2"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("E2")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											E2
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("E3")}
											style={{
												backgroundColor:
													Seats["E3"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("E3")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											E3
										</div>
									</Col>
								</Row>
								<Row>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("F1")}
											style={{
												backgroundColor:
													Seats["F1"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("F1")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											F1
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("F2")}
											style={{
												backgroundColor:
													Seats["F2"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("F2")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											F2
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("F3")}
											style={{
												backgroundColor:
													Seats["F3"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("F3")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											F3
										</div>
									</Col>
								</Row>
								<Row>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("G1")}
											style={{
												backgroundColor:
													Seats["G1"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("G1")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											G1
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("G2")}
											style={{
												backgroundColor:
													Seats["G2"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("G2")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											G2
										</div>
									</Col>
									<Col>
										<div
											className="business-div"
											onClick={() => handleSeat("G3")}
											style={{
												backgroundColor:
													Seats["G3"] === "booked"
														? "rgb(102, 102, 102)"
														: selectedSeats.includes("G3")
															? "green"
															: "rgb(96, 96, 255)",
											}}
										>
											G3
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</Row>
				</Col>
				<Col xs={24} md={12} className="flight-details">
					<Form onFinish={handleBook}>
						<h3 style={{ marginBottom: "1rem" }}>Flight Details:</h3>
						<Row justify="center" style={{ width: "100%", marginBottom: "1rem" }}>
							<h2 style={{ color: "rgb(75, 75, 246)" }}>{`${from} - ${to}`}</h2>
						</Row>

						{/* <Row>
                    <Col>
                        <Form.Item
                        name="start"
                        label={<span>From (city)</span>}
                        rules={[
                            {
                                required:true,
                                message:"Please enter your trip start location",
                            }
                        ]}
                        style={{marginRight:"2rem"}}>
                            <Input label="From"></Input>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                        name="destination"
                        label={<span>To (city)</span>}
                        rules={[
                            {
                                required:true,
                                message:"Please enter your trip end location",
                            }
                        ]}>
                            <Input label="To"></Input>
                        </Form.Item>
                    </Col>
                    
                </Row> */}
						<Row>
							<Col xs={24} md={8}>
								<Form.Item
									name="category"
									label={<span>Class</span>}
									rules={[
										{
											required: true,
											message: "Please fill your flight seat class.",
										},
									]}
								>
									<Select style={{ width: "8rem" }}>
										<Option key="business" value="Flight-business">
											Business
										</Option>
										<Option key="economy" value="Flight-economy">
											Economy
										</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col xs={24} md={8}>
								<Form.Item
									name="date"
									label={<span>Date</span>}
									rules={[
										{
											required: true,
											message: "Please enter your trip date.",
										},
									]}
								>
									<DatePicker />
								</Form.Item>
							</Col>
							<Col xs={24} md={8}>
								<Form.Item
									name="time"
									label={<span>Time</span>}
									rules={[
										{
											required: true,
											message: "Please enter your trip time.",
										},
									]}
								>
									<TimePicker />
								</Form.Item>
							</Col>
						</Row>
						<Row>
							<Col
								xs={24}
								md={24}
								style={{ display: "flex", justifyContent: "center" }}
							>
								<Button
									htmlType="submit"
									style={{ backgroundColor: "rgb(96, 96, 255)", width: "10rem" }}
									disabled={selectedSeats.length === 0}
								>
									Buy
								</Button>
							</Col>
						</Row>
					</Form>
					<Row style={{ width: "90%" }}>
						<h3 style={{ color: "rgb(254, 45, 45)" }}>Note:</h3>
						<p>
							For buying your ticket, you can choose your seat and click on it. Seats
							with gray colour are already purchased.
						</p>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default BookFlight;
