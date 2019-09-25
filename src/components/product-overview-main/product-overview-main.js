import React from 'react';
import  './product-overview-main.scss';
import { Container, Row, Col } from 'reactstrap';
import {PHONEOWERVIEW} from '../../assets/Icons';
import {ProductOverview, Titles} from '../../mocks';
import HeadSections from '../head-sections';

const ProductOverviews = new ProductOverview();
const title = new Titles();

const ProductOverviewMain = () => {

const descriptions = ProductOverviews.description.map((item)=>{
    return (
        <div key={item.id} className={`item${item.id}`}>
            <h3>{item.Title}</h3>
            <p>{item.Text}</p>
            <a href="#" className="read-more">Read More →</a>
        </div>
    )
})
  return (
    <div className="product-overview-main">
        <div className="center">
        <Container style = {{maxWidth: "100%"}}>
            <Row className="head">
                <Col xs="12" sm="6" md="5">
                    <HeadSections 
                        subtitle= {title.BlockTitles[0].SubTitle} 
                        title = {title.BlockTitles[0].Title}/>
                </Col>
                <Col xs="12" sm="6" md={{ size: 6, offset: 1 }}>
                    <p>{title.BlockTitles[0].Description}</p>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="6" md="5">
                    <div className="description-list">
                        {descriptions}
                    </div>
                </Col>
                <Col xs="12" sm="6" md={{ size: 6, offset: 1 }}>
                    <div className="visual">
                        <img src={PHONEOWERVIEW} alt='img'/>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    </div>
    )
}

export default ProductOverviewMain;
