import React from 'react';
import './companys.scss';
import { Container, Row, Col} from 'reactstrap';
import {CompanysMocks, Titles} from '../../mocks';
import HeadSections from '../head-sections';

const companys = new CompanysMocks();
const Title = new Titles();

const Companys = () => {
    const trusted = companys.companys.slice(0, 8).map((item)=>{
        return (
            <Col xs="4" sm="4" md="auto" key={item.id}>
                <div className="visual">
                    <img src={require(`../../assets/img/SVG/${item.image}.svg`)} alt = "img"/>
                </div>
            </Col>
        )
    });

    const featured = companys.companys.slice(8).map((item)=>{
        return (
            <Col xs="4" sm="4" md="2" key={item.id}>
                <div className="visual">
                    <img src={require(`../../assets/img/SVG/${item.image}.svg`)} alt = "img"/>
                </div>
            </Col>
        )
    })

  return (
        <div className="companys">
            <div className="center">
                <Container style = {{maxWidth: "100%"}}>
                    <Row className="head">
                        <Col xs="12" sm="12" md="12">
                            <HeadSections     
                            title = {Title.BlockTitles[4].Title}/>
                        </Col>
                    </Row>
                    <Row>
                        <span className="subtitle">{Title.BlockTitles[4].SubTitle}</span>
                    </Row>
                    <Row className="companys-list">
                        {trusted}
                    </Row>
                    <Row>
                        <span className="subtitle">{Title.BlockTitles[4].Description}</span>
                    </Row>
                    <Row className="companys-list">
                        {featured}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Companys;
