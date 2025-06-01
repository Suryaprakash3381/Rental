import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/HeaderStyle.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.jpg'; // Assuming you have a logo image


function Header() {
  return (
    <header >
      <Navbar collapseOnSelect expand="lg" className="">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
             <img src={Logo} alt="hc " />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" >Login</Nav.Link>
              <Nav.Link as={Link} to="/about" >about</Nav.Link>
              <Nav.Link as={Link} to="/menu" >Cars</Nav.Link>
              <Nav.Link as={Link} to="/blog" >Join as vendor</Nav.Link>
              <Nav.Link as={Link} to="/contact" >Rent a car</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;