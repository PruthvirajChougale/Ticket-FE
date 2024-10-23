import {Row,Col} from "antd";
import { PhoneOutlined, EnvironmentOutlined, WhatsAppOutlined, InstagramOutlined } from '@ant-design/icons'; 


const RegFooter = () =>{
    return(
        <>
        <div className="footer">
            <Row className="footer" >
                <Col xs={24} md={8} className="footer">
                <PhoneOutlined className="footer" style={{fontSize:"1rem",display:"inline"}} />
                <h3 className="footer" style={{display:"inline"}}>Contact</h3>
                <span className="footer" style={{display:"block"}}>Office: +91 12345 67890</span>
                <span className="footer" style={{display:"block"}}>Telephone: +91 12345 67890</span>
                </Col>

                <Col xs={24} md={8} className="footer">
                <EnvironmentOutlined className="footer" style={{fontSize:"1rem",display:"inline"}}/>
                <h3 className="footer" style={{display:"inline"}}>Location</h3>
                <span className="footer" style={{display:"block"}}>IIT Madras</span>
                <span className="footer" style={{display:"block"}}>Sardar Patel Road</span>
                <span className="footer" style={{display:"block"}}>Chennai-123456</span>
                </Col>

                <Col xs={24} md={8} className="footer">
                <h3 className="footer" style={{display:"block"}}>Social Media</h3>
                <WhatsAppOutlined className="footer" style={{display:"inline"}}/>
                <span className="footer" style={{display:"inline"}}> WhatsApp</span>
                <br />
                <InstagramOutlined className="footer" style={{display:"inline"}}/>
                <span className="footer" style={{display:"inline"}}> Instagram</span>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default RegFooter;