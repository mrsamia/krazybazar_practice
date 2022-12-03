import React from "react";
import pic1 from "../Images/1.jpg";
import AddToCartButton from "./AddToCartButton";


function CardItems(props) {

  function handleAddClick(){
    props.addToCart({
      title: props.title,
      price: props.price
    })
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
            <AddToCartButton onClick={handleAddClick}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItems;
