import React from 'react';
import HeadSections from '../head-sections';
import { Container, Row, Col} from 'reactstrap';
import './responsiveness.scss';


const Responsiveness = ({subtitle, title, image, descriptions}) => {
    return (
        <div className="responsiveness">
            <Container style = {{maxWidth: "100%"}}>
                <Row>
                    <Col xs="12" sm="12" md='12'>
                        <HeadSections 
                            subtitle= {subtitle} 
                            title = {title}
                            description ={descriptions}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md='12'>
                        <div className="visual">
                            <img src={`${require(`../../assets/img/PNG/${image}`)}`} alt='img'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Responsiveness;
