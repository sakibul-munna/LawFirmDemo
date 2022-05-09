import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand>
              <img
                src={require("../assets/logo.png")}
                alt="logo"
                width="50px"
                height="50px"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link href="home">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/blogs">
                <Nav.Link href="blogs">Blogs</Nav.Link>
              </LinkContainer>
              <Nav.Link href="checkout">Checkout</Nav.Link>
            </Nav>
            <Nav>
              <LinkContainer to="/about">
                <Nav.Link href="about">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link href="login">Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
