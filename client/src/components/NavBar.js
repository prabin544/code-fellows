import React, { Component, useState } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";
import LoginButton from './Login'
import LoginOutButton from './LogOut'
import { useAuth0 } from "@auth0/auth0-react";
import ContactPage from './ContactPage'



function NavbarPage() {

const [open, setOpen] = useState(false);
const { user, isAuthenticated } = useAuth0();

//render() {
  return (

      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">News</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => setOpen(!open)} />
        <MDBCollapse id="navbarCollapse3" isOpen={open} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/"><i class="fas fa-home"></i></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="login"><LoginButton />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact"><i class="fas fa-envelope"></i>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/logOut"><LoginOutButton />
              </MDBNavLink>
            </MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

    );
}

export default NavbarPage;