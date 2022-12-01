import React from "react";
import Searchbtn from "./Searchbtn";
import "./component.css";
import logo from "../Images/updated-logo.svg";
import myCart from "../Images/my-cart.svg";

function Nav(props) {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg navbar-light bgnav">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" container collapse navbar-collapse "
          id="navbarTogglerDemo01"
        >
          <img className="brand-logo" src={logo} alt="img" />
          <Searchbtn />
          <div className="icon-white-rounded-bg d-flex justify-content-center align-items-center ">
            <img src={myCart} alt="img" />
            <span className="counter">0</span>
            <span className="icon-title">My Cart</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
