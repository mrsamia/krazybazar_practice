import React from "react";
import Searchbtn from "./Searchbtn";
import "./component.css";
import "../Styles/nav.css";
import logo from "../Images/updated-logo.svg";
import myCart from "../Images/my-cart.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Naav(props) {
  return (
    <Navbar className="bgnav" expand="lg">
      <Container fluid>
        <img className="brand-logo" src={logo} alt="img" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="nav-collapse-wrapper">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: "100px", width: "100%" }}
            navbarScroll
          >
            <Searchbtn />
          </Nav>
          <div className="icon-white-rounded-bg">
            <img src={myCart} alt="img" />
            <span className="counter">0</span>
            <span className="icon-title">My Cart</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naav;
