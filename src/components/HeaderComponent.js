import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";



class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }


    toggleNav() {   {/*Để đưa method này vào JSX bên dưới onClick cần phải bind nó vào constructor*/}
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment> {/*ReactFragment syntax*/}
            <Navbar dark expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick ={this.toggleNav} />
                        <NavbarBrand className='mr-auto' href="/"><img src='assets/images/logo.png' height='30' width='41' alt='Brand Name here' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>

                        
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>                                 <span className="fa fa-home fa-lg"></span>Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus'>                                 <span className="fa fa-info fa-lg"></span>About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu'>                                 <span className="fa fa-list fa-lg"></span>Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contacus'>                                 <span className="fa fa-address-card fa-lg"></span>Contact Us
                                    </NavLink>
                                </NavItem>
                                </Nav>
                            </Collapse>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Brand Name here</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>

                        </div>
                     </div>
                </Jumbotron>
            </React.Fragment>


       )
    }


}
export default Header;