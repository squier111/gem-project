import React from 'react';
import './how-it-works.scss';
import { Container, Row, Col} from 'reactstrap';
import HeadSections from '../head-sections';
import {EXCHANGE, USER, VAULT, CIRCLE, DATAICONS, SYMBOLS} from '../../assets/Icons'


const HowItWorks = ({subtitle, title, description}) => {

  return (
        <div className="how-it-works">
            <div className="center">
                <Container style = {{maxWidth: "100%"}}>
                    <Row>
                        <HeadSections 
                            subtitle= {subtitle} 
                            title = {title}
                            description = {description}/>
                    </Row>
                    <Row className="graph">
                        <Col xs="12" sm="4" md="4">
                            <div className="visual">
                                <img src={USER} />
                            </div>
                        </Col>
                        <Col xs="12" sm="4" md="4">
                            <div className="visual">
                                <img src={VAULT} />
                            </div>
                        </Col>
                        <Col xs="12" sm="4" md="4">
                            <div className="visual">
                                <img src={EXCHANGE} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="circle">
                        <Col xs="12" sm="12" md="12">
                            <img src={CIRCLE} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HowItWorks;
