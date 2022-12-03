import React from "react";
import Searchbtn from "./Searchbtn";
import "./component.css";
import logo from "../Images/updated-logo.svg";
import myCart from "../Images/my-cart.svg";
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

function Naav(props) {
  return (
   

    <Navbar expand="lg" className="bgnav" fixed="top">

      <Container className="d-flex justify-content-between">
        <div>
          <img className="brand-logo" src={logo} alt="img" />
        </div>
        
        <div className="w-100" style={{position:"relative"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:"center"}} >
          <Searchbtn />
            <div className="icon-white-rounded-bg d-flex justify-content-center align-items-center ">
              <img src={myCart} alt="img" />
              <span className="counter">0</span>
              <span className="icon-title">My Cart</span>
            </div>
          </Navbar.Collapse>
        </div>
      </Container>

    </Navbar>




    
  );
}

export default Naav;
