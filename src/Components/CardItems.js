import React from "react";
import pic1 from "../Images/1.jpg";

function CardItems(props) {
  return (
    <div className="pb-5 ">
      <div className="container card width" >
        <img src={pic1} />
        <div className="card-body">
          <h5 className="product-title">{props.title}</h5>
          <div>
          <p className="card-text product-amount">{props.amount}</p>
          <p className="card-text product-amount">{props.stock}</p>
          <p className="card-text product-price">{props.price}</p>
          </div>
          <div className="pt-3 d-flex justify-content-center">
            <button className="cart-button">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItems;
