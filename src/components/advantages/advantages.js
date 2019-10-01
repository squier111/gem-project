import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import HeadSections from '../head-sections';
import './advantages.scss';

const Advantages = ({subtitle, title, AdvantagesList}) => {
    const listAdvantages = AdvantagesList.advantagesList.map((item)=>{
        return (
            <Col xs="12" sm="6" md='6' key={item.id}>
                <div className="advantages-holder">
                    <span className="advantages-title">{item.title}</span>
                    <ul className="advantages-list">
                        {
                            item.items.map((list, id)=>{
                                return (
                                    <li key={id}>
                                        <span>
                                            <i className="icon">
                                                <img src={`${require(`../../assets/img/SVG/${item.image}`)}`} alt='img'/>
                                            </i>
                                            {list}
                                        </span>
                                    </li>
                                )
                            }) 
                        }
                    </ul>
                </div>
            </Col>
        )
    });
    return (
      <div className="advantages">
            <Container style = {{maxWidth: "100%"}}>
                <Row>
                    <Col xs="12" sm="12" md='12'>
                        <HeadSections 
                            subtitle= {subtitle} 
                            title = {title}
                        />
                    </Col>
                </Row>
                <Row className="advantages-block">
                    {listAdvantages}
                </Row>
            </Container>
      </div>
  )
}

export default Advantages;
