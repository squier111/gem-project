import React, {Component} from 'react';
import  './for-developers.scss';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {CODE} from '../../assets/Icons';
import classnames from 'classnames';
import {Titles} from '../../mocks';
import HeadSections from '../head-sections';
import ButtonsHolder from '../buttons-holder';

const Title = new Titles();

class ForDevelopers extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render() {
        return (
            <div className="for-developers" 
            style = {{
                background: `url(${require(`../../assets/img/PNG/bg-for-developers.png`)}) no-repeat 0% 50%`,
            }}>
                <div className="center">
                    <Container style = {{maxWidth: "100%"}}>
                        <Row>
                            <Col xs="12" sm="6" md="6">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                        >
                                        Onramp
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                        >
                                        Connect
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => { this.toggle('3'); }}
                                        >
                                        API
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <img src={CODE} alt='img'/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <img src={CODE} alt='img'/>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <img src={CODE} alt='img'/>
                                    </TabPane>
                                </TabContent>
                            </Col>
                            <Col xs="12" sm="6" md={{ size: 5, offset: 1 }}>
                                <div className="info" >
                                    <HeadSections 
                                        subtitle= {Title.BlockTitles[10].SubTitle} 
                                        title = {Title.BlockTitles[10].Title}
                                        description = {Title.BlockTitles[10].Description}/>
                                    <ButtonsHolder/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default ForDevelopers;
