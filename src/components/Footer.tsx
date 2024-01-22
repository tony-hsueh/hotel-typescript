import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import lineIcon from '@assets/line.svg'
import instagramIcon from '@assets/instagram.svg'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='footer-top'>
          <Col lg={6}>
            <div className='footer-logo'>
              <img src='https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true'/>
            </div>
            <div className='social-links'>
              <Link to="https://www.figma.com/file/23VhjSXFWeZfXYXjcZOceb/%E5%85%AD%E8%A7%92-Project-%2F-%E9%85%92%E5%BA%97%E8%A8%82%E6%88%BF%E7%B6%B2%E7%AB%99?type=design&node-id=14-2271&mode=design&t=n33SGSePSmGTxnsC-0" target='_blank'>
                <div className='social-link'>
                  <img src={lineIcon} /> 
                </div>
              </Link>
              <Link to="https://www.figma.com/file/23VhjSXFWeZfXYXjcZOceb/%E5%85%AD%E8%A7%92-Project-%2F-%E9%85%92%E5%BA%97%E8%A8%82%E6%88%BF%E7%B6%B2%E7%AB%99?type=design&node-id=14-2271&mode=design&t=n33SGSePSmGTxnsC-0" target='_blank'>
                <div className='social-link'>
                  <img src={instagramIcon} /> 
                </div>
              </Link>
            </div>
          </Col>
          <Col>
            <div className='hotel-contact'>
              <div className='left'>
                <div className='contact-method'>
                  <h5 className='contact-name'>TEL</h5>
                  <p className='contact-value'>+886-7-1234567</p>
                </div>
                <div className='contact_method'>
                  <h5 className='contact-name'>FAX</h5>
                  <p className='contact-value'>+886-7-1234567</p>
                </div>
              </div>
              <div>
                <div className='contact-method'>
                  <h5 className='contact-name'>MAIL</h5>
                  <p className='contact-value'>elh@hexschool.com</p>
                </div>
                <div className='contact-method'>
                  <h5 className='contact-name'>WEB</h5>
                  <p className='contact_value'>www.elhhexschool.com.tw</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <p className='address'>台灣高雄市新興區六角路123號</p>
          </Col>
          <Col lg={6}>
            <div className='copyright'>© 享樂酒店 2023 All Rights Reserved.</div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer