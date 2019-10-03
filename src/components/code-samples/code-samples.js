import React, {Component} from 'react';
import  './code-samples.scss';
import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import classnames from 'classnames';
import HeadSections from '../head-sections';
import CodeExample from '../code-example';

class CodeSamples  extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
          active: -1,
        };
    }
    
    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }

    toggleCollapse(index) {
        const current = this.state.active === index ? -1 : index;
        this.setState(() => ({ active: current }));
    }


    list = (active) => this.props.codelist.map((item, index)=>{
        console.log(active)
        return (
            <div key={item.id} className={`item ${classnames({ active: index === active})}`}>
                <div className="head" onClick={()=> this.toggleCollapse(index)}>
                    <h3>{item.Title}</h3>
                    <div className="info-box">
                        <span className={`type ${classnames({ get: item.Type=== 'Get' })}`}>{item.Type}</span>
                        <span>{`/${item.Info}`}</span>
                    </div>
                </div>
                <div className="text">
                    <p>{item.Text}</p>
                </div>
            </div>
        )
    })

    
    render() {
        console.log(this.state.active)
        return (
            <div className="code-samples" 
                style = {{
                    background: `url(${require(`../../assets/img/PNG/bg-code-samples.png`)}) no-repeat 100% 50%`,
                }}>
                <div className="center">
                    <Container style = {{maxWidth: "100%"}}>
                        <Row>
                            <Col xs="12" sm="12" md='12'>
                                <HeadSections 
                                    subtitle= {this.props.subtitle} 
                                    title = {this.props.title}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="12" md="6">
                                <div className="description-list">
                                    {this.list(this.state.active)}
                                </div>
                            </Col>
                            <Col xs="12" sm="12" md="6">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                        >
                                        Request
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                        >
                                        Response
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <CodeExample code={this.props.codes}/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                       <CodeExample code={this.props.codes}/>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default CodeSamples;
