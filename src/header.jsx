import {Row,Col} from "antd";

const RegHeader = () =>{
    return(
        <>
        <div className="header">
        <Row >
            <Col span={24}>
            <h1>Melody</h1>
            <h1 id="verse">Verse</h1>
            </Col>
        </Row>
        </div>
        </>
    )
}

export default RegHeader;