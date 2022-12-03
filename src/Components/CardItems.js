import React, { useState } from "react";
import pic1 from "../Images/1.jpg";
import AddToCartBtn from "./AddToCartBtn";
import Cartbtn from "./Cartbtn";

function CardItems(props) {
  const [value,setValue]=useState(true)

  function OnclickHandler(){
    setValue(Cartbtn)  
  }
  return (
    <div className="pb-5 ">
      <div className="container card width" >
        <img src={pic1} alt="img"/>
        <div className="card-body">
          <h5 className="product-title">{props.title}</h5>
          <div>
          <p className="card-text product-amount">{props.amount}</p>
          <p className="card-text product-amount">{props.stock}</p>
          <p className="card-text product-price">{props.price}</p>
          </div>
          <div className="pt-3 d-flex justify-content-center">
            {/* <AddToCartBtn /> */}
            <button className="cart-button" onClick={OnclickHandler}>Add to Cart</button>
            {/* <Cartbtn/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItems;
