import { Row, Col } from "antd";

const RegHeader = () => {
	return (
		<>
			<div className="header">
				<Row>
					<Col span={24}>
						<h1>Ticket</h1>
						<h1 id="verse">Easy</h1>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default RegHeader;
