import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/NavBar.css';
import Carousel01 from './carouselData';
import imgLogo from './images/navbar/logo.png';

function NavBar() {
  return (
    <header id="Home">
      <div className="topbar">
        <Container className="topbar-content">
          <span>Flexible packaging films, made for your business</span>
          <span>Based in Dhaka, Bangladesh</span>
        </Container>
      </div>
      <Navbar expand="lg" sticky="top" className="site-navbar">
        <Container>
          <Navbar.Brand href="#Home" aria-label="Arac Polywrap home">
            <img className="site-logo" src={imgLogo} alt="Arac Polywrap" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navigation" />
          <Navbar.Collapse id="main-navigation">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Product">Products</Nav.Link>
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link className="contact-nav-link" href="#ContactUs">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel01 />
    </header>
  );
}

export default NavBar;
