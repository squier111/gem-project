import React from 'react';
import './list-items.scss';
import { Container, Row, Col} from 'reactstrap';
import {Titles} from '../../mocks';
import HeadSections from '../head-sections';


const Title = new Titles();

const ListItems = ({ListItem, subtitle, title, description}) => {
    const security = ListItem.map((item)=>{
        return (
            <Col xs="12" sm="12" md="4" key={item.id}>
                <div className="item">
                    <div className="visual">
                        <img src={require(`../../assets/img/SVG/${item.image}.svg`)} alt = "img"/>
                    </div>
                    <h4>{item.Title}</h4>
                    <p>{item.Text}</p>
                </div>
            </Col>
        )
    })

  return (
        <div className="list-items">
            <div className="center">
                <Container style = {{maxWidth: "100%"}}>
                    <Row>
                        <HeadSections 
                            subtitle= {subtitle} 
                            title = {title}
                            description = {description}/>
                    </Row>
                    <Row className="items">
                        {security}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ListItems;
