import React from 'react';
import './main-screen.scss';
import { Container, Row, Col } from 'reactstrap';
import {PHONE} from '../../assets/Icons';
import ButtonsHolder from '../buttons-holder';

const MainScreen = () => {

    const bg = 'bg-main1.png'
    const bb = require(`../../assets/img/PNG/${bg}`)
    const style = {
        background: `url(${bb}) no-repeat 50% 50%`,
    }

    return <div className="main-screen">
        <div className="bg" style = {style}></div>
        <div className="center">
            <Container style = {{maxWidth: "100%"}}>
                <Row>
                    <Col xs="6" sm="6" md="6">
                        <div className="holder">
                            <h1>The easiest way for users to connec crypto to your app.</h1>
                            <p>Gem gives developers a single interface to the crypto universe with just a few lines of code and a beautiful user experience.</p>
                            <ButtonsHolder/>
                        </div>
                    </Col>
                    <Col xs="6" sm="6" md="6">
                        <div className="visual">
                            <img src={PHONE} alt='img'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
}

export default MainScreen;