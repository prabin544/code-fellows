import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { FaHome } from 'react-icons/fa';

const NavbarPage = (props) => {

  const renderContent = () =>{
    switch(props.user){
      case null:
        return <Nav.Link href="/">Loading</Nav.Link>
      case false:
        return <Nav.Link href="/auth/google">SignIn</Nav.Link>
      default:
        return(
          <React.Fragment>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/api/logout">Logout</Nav.Link>
          </React.Fragment>
        )
    }
  }
  return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href={props.user ? '/news' : '/'}><FaHome /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          {renderContent()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
  
}

const mapStateToProps = (state) => {
  return{
    user:state.auth
  }
}

export default connect(mapStateToProps)(NavbarPage);