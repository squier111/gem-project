import React from 'react';
import './footer.scss'
import { Container, Row, Col} from 'reactstrap';
import {LOGOFOOT} from '../../assets/Icons';
import {FooterListMocks} from '../../mocks';
import {FOOTERBG} from '../../assets/Icons';

const footerList = new FooterListMocks();

const Footer = () => {
    const list = footerList.footerList.map((item)=>{
        return (
            <Col xs="6" sm="6" md="auto" key={item.id}>
                <span className="subtitle">{item.title}</span>
                <ul className="footer-list">
                    {
                       item.items.map((list, id)=>{
                           return (
                               <li key={id}><a href="#">{list}</a></li>
                           )
                       }) 
                    }
                </ul>
            </Col>
        )
    });

    const style = {
        background: `url(${FOOTERBG}) no-repeat 50% 100%`,
    }
    return (
        <div className="footer">
            <div className="footer-element" style={style}></div>
            <div className="footer-holder">
                <div className="center">
                    <Container style = {{maxWidth: "100%"}}>
                        <Row className="footer-top">
                            <span className="footer-title">Ready to get started?</span>
                            <div className="footer-btn-holder">
                                <button className="pricing-btn">See Our Pricing →</button>
                                <button className="api-key-btn">Get API Keys →</button>
                            </div>
                        </Row>
                        <Row className="footer-bot">
                            <Col xs="12" sm="12" md="3">
                                <img src={LOGOFOOT} alt='logo' className='logo-foot'/>
                            </Col>
                            {list}
                        </Row>
                        <Row className="copyright">
                            <span className="copy">
                                ©2019 Gem®. All Rights Reserved
                            </span>
                            <ul>
                                <li>
                                    <a href="#">Privacy Statement</a>
                                </li>
                                <li>
                                    <a href="#">Security</a>
                                </li>
                                <li>
                                    <a href="#">Legal</a>
                                </li>
                            </ul>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Footer;
