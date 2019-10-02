import React, {Component} from 'react';
import './header.scss';
import {Link, NavLink} from 'react-router-dom'
import {LOGO} from '../../assets/Icons';
import classnames from 'classnames';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        return <div className="header">
            <div className="center">
            <Navbar light expand="md">
                <Link  to='/' className="logo-holder">
                    <img src={LOGO} alt='logo' className='logo'/>
                </Link>
                <span className="open-btn" onClick={this.toggle}></span>
                <div className={`collapse-holder ${classnames({ open: this.state.isOpen === true })}`} isOpen={this.state.isOpen}>
                    <div className="holder">
                        <span className="close-btn" onClick={this.toggle}></span>
                        <Nav navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Products
                                </DropdownToggle>
                                <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink exact={true} to='/onramp' className="link">
                                        <span className="title" style={{color: '#D8D8D8'}}>Onramp</span>
                                        <span className="description">The “add money” button for crypto.</span>
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink exact={true} to='/connect' className="link">
                                        <span className="title" style={{color: '#848C12'}}>Connect</span>
                                        <span className="description">Connect your users’ crypto exchange accounts to your app.</span>
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavLink exact={true} to='/api' className="link">
                                        <span className="title" style={{color: '#F98C00'}}>API</span>
                                        <span className="description">Access user’s accounts across cryptocurrency exchanges through a single interface.</span>
                                    </NavLink>
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink exact={true} to='/security' className="link">Security</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact={true} to='/pricing' className="link">Pricing</NavLink>
                            </NavItem>
                        </Nav>
                        <div className="user-panel ml-auto">
                            <button className="sign-in-btn">Sign In</button>
                            <button className="api-key-btn">Get API Keys →</button>
                        </div>
                    </div>
                </div>
            </Navbar>
            </div>
        </div>
    }
}

export default Header;
