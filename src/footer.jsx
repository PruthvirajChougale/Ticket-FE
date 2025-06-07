import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faContactBook } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const RegFooter = () => {
	return (
		<>
			<div className="footer" style={{ padding: "0" }}>
				<Row className="footer">
					<Col xs={24} md={8} className="footer">
						{/* <PhoneOutlined className="footer" style={{fontSize:"1rem",display:"inline",backgroundColor:"#2C3046",color:"#2C3046"}} /> */}
						<FontAwesomeIcon
							icon={faContactBook}
							style={{ height: "1rem", backgroundColor: "#2C3046" }}
						/>
						<h3 className="footer" style={{ display: "inline" }}>
							{" "}
							Contact
						</h3>
						<span className="footer" style={{ display: "block" }}>
							Office: +91 12345 67890
						</span>
						<span className="footer" style={{ display: "block" }}>
							Telephone: +91 12345 67890
						</span>
					</Col>

					<Col xs={24} md={8} className="footer">
						<FontAwesomeIcon
							icon={faLocation}
							style={{ height: "1rem", backgroundColor: "#2C3046" }}
						/>
						<h3 className="footer" style={{ display: "inline" }}>
							{" "}
							Location
						</h3>
						<span className="footer" style={{ display: "block" }}>
							IIT Madras,
						</span>
						<span className="footer" style={{ display: "block" }}>
							Sardar Patel Road,
						</span>
						<span className="footer" style={{ display: "block" }}>
							Chennai-123456
						</span>
					</Col>

					<Col xs={24} md={8} className="footer">
						<h3 className="footer" style={{ display: "block" }}>
							Social Media
						</h3>
						<FontAwesomeIcon
							icon={faWhatsapp}
							style={{ height: "1rem", backgroundColor: "#2C3046" }}
						/>
						<span className="footer" style={{ display: "inline" }}>
							{" "}
							WhatsApp
						</span>
						<br />
						<FontAwesomeIcon
							icon={faInstagram}
							style={{ height: "1rem", backgroundColor: "#2C3046" }}
						/>
						<span className="footer" style={{ display: "inline" }}>
							{" "}
							Instagram
						</span>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default RegFooter;
