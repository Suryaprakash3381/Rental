import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/HeaderStyle.css';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.jpg';

function Header() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for login/logout changes from other tabs/windows
    const handler = () => setLoggedIn(!!localStorage.getItem('token'));
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rentId')
    setLoggedIn(false);
    alert('Logout successful!');
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              <img src={Logo} alt="hc " />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {loggedIn ? (
                <Nav.Link as="button" onClick={handleLogout} style={{ background: 'none', border: 'none' }}>
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              )}
              <Nav.Link as={Link} to="/about">about</Nav.Link>
              <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
              <Nav.Link as={Link} to="/blog">Join as vendor</Nav.Link>
              {loggedIn ? (
                <Nav.Link as="button" onClick={() => navigate('/requestedCar')} style={{ background: 'none', border: 'none' }}>
                  Request car
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">Rent a car</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;