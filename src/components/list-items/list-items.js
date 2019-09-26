import React from 'react';
import './list-items.scss';
import { Container, Row, Col} from 'reactstrap';
import {ListItemsMocks, Titles} from '../../mocks';
import HeadSections from '../head-sections';

const ListItem = new ListItemsMocks();
const Title = new Titles();

const ListItems = () => {
    const security = ListItem.items.slice(0, 3).map((item)=>{
        return (
            <Col xs="12" sm="4" md="4" key={item.id}>
                <div className="visual">
                    <img src={require(`../../assets/img/SVG/${item.image}.svg`)} alt = "img"/>
                </div>
                <h4>{item.Title}</h4>
                <p>{item.Text}</p>
            </Col>
        )
    })

  return (
        <div className="list-items">
            <div className="center">
                <Container style = {{maxWidth: "100%"}}>
                    <Row>
                        <HeadSections 
                        subtitle= {Title.BlockTitles[3].SubTitle} 
                        title = {Title.BlockTitles[3].Title}
                        description = {Title.BlockTitles[3].Description}/>
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
