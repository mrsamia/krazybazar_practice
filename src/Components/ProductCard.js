import React, { useEffect, useState } from "react";
// import AddToCartButton from "./AddToCartButton";
import data from "./CardData";
import pic1 from "../Images/1.jpg";
import ShoppingCart from "./ShoppingCart";
import CartInnerPart from "./CartInnerPart";
// import CardItems from "./CardItems";

function ProductCard(props) {
  const [cart, setCart] = useState({
    isOpen: false,
    ShoppingCart: [],
    isQuantity: 0,
  });

  // const addToCartHandler = (product) => {

  //   setCart({ ...cart, ShoppingCart: [...cart.ShoppingCart, product] });
  //   if (!cart.isOpen) {
  //     setCart({ ...cart, isOpen: true });
  //   }
  // };

  const addToCartHandler = (product) => {
    //already in shop cart
   
    // console.log(cart.ShoppingCart, "aita amar current shopping cart");
   
    // debugger;

    if (!cart.isOpen) {
      setCart({ ...cart, isOpen: true });
    }
    setCart((state) => {

      for(let item=0; item < cart.ShoppingCart.length ; item++){
        console.log(cart.ShoppingCart[item])
      }
      return {
        ...state,
        ShoppingCart: [...cart.ShoppingCart, product],
      };
    });

  };

  
  useEffect(() => {
    
    console.log(cart.ShoppingCart,"aita amar current shopping cart");
    
  }, [cart])
  

  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div className="col-4 pb-5">
            <div className="container card width">
              <img src={pic1} alt="img" />
              <div className="card-body">
                <h5 className="product-title">{item.title}</h5>
                <div>
                  <p className="card-text product-amount">{item.amount}</p>
                  <p className="card-text product-amount">{item.stock}</p>
                  <p className="card-text product-price">{item.price}</p>
                </div>
                <div className="pt-3 d-flex justify-content-center">
                  <button
                    className="cart-button"
                    onClick={() => addToCartHandler(item)}
                  >
                    Add to Cart
                  </button>
                  <div>{cart.isOpen ? <ShoppingCart /> : ""}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
