import React from 'react';
import './main-screen.scss';
import { Container, Row, Col } from 'reactstrap';
import ButtonsHolder from '../buttons-holder';

const MainScreen = ({Subtitle, Title, Description, Image, BgImage, Name}) => {
    const style = {
        background: `url(${require(`../../assets/img/PNG/${BgImage}`)}) no-repeat 50% 50%`,
    }

    return <div className="main-screen">
        <div className="bg" style = {style}></div>
        <div className="center">
            <Container style = {{maxWidth: "100%"}}>
                <Row>
                    <Col xs="12" sm="12" md="6">
                        <div className="holder">
                            <span className="subtitle">{Subtitle}</span>
                            <h1>{Title}</h1>
                            <p>{Description}</p>
                            <ButtonsHolder/>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                        <div className="visual">
                            <img src={`${require(`../../assets/img/PNG/${Image}`)}`} alt='img'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
}

export default MainScreen;
