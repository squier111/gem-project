import React, {Component} from 'react';
import './header.scss';
import {Link, NavLink} from 'react-router-dom'
import {LOGO} from '../../assets/Icons';
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
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav  navbar>
                        <NavItem>
                            <NavLink exact={true} to='/products' className="link">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact={true} to='/security' className="link">Security</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact={true} to='/pricing' className="link">Pricing</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Options
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <div className="user-panel ml-auto">
                        <button className="sign-in-btn">Sign In</button>
                        <button className="api-key-btn">Get API Keys →</button>
                    </div>
            </Collapse>
            </Navbar>
            </div>
        </div>
    }
}

export default Header;
