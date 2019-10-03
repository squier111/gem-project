import React from 'react';
import  './product-overview.scss';
import { Container, Row, Col } from 'reactstrap';
import {PHONEOWERVIEW2, ARR} from '../../assets/Icons';
import HeadSections from '../head-sections';
import CodeExample from '../code-example';


const ProductOverview = ({subtitles, descriptions, titles, codes, image}) => {

  return (
    <div className="product-overview">
        <div className="center">
            <Container style = {{maxWidth: "100%"}}>
                <Row className="head">
                    <Col xs="12" sm="12" md="12">
                        <HeadSections 
                            subtitle= {subtitles} 
                            description = {descriptions}
                            title = {titles}/>     
                    </Col>
                </Row>
                <Row className="content">
                    <Col xs="12" sm="12" md="6">
                        <CodeExample code={codes}/>
                    </Col>
                    <Col xs="1" sm="12" md="2">
                        <div className="arr">
                            <img src={ARR} alt='img'/>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="4">
                        <div className="visual">
                            <img src={`${require(`../../assets/img/PNG/${image}`)}`} alt='img'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    )
}

export default ProductOverview;
