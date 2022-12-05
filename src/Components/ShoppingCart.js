import React from "react";
import BlackBoldText from "./BlackBoldText";
import Buton from "./Buton";
import HomeDelivery from "../Images/home-delivery-icon.svg";
import ClickCollect from "../Images/click-collect-icon.svg";
import data from "./CardData";
import CartInnerPart from "./CartInnerPart";

function ShoppingCart(props) {
  return (
    <>
      <div className="cartWrapper ">
        <div className="modal-header">
          <div className="d-flex align-items-center pt-3">
            <BlackBoldText name="Cart 1 Items" />
          </div>
        </div>
        <div>
          {
            data.map((item)=>{
              return(
                <CartInnerPart title={item.title}
                price={item.price}/>
              )
            })
          }
        </div>
        <div className="w-100" style={{ position: "absolute", bottom: 0 }}>
          <div>
            <p className="order-alart">
              Minimum order amount for home delivery is $100
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <BlackBoldText name="Total Amount" />
            <p className="" style={{ color: "red", fontWeight: "bold" }}>
              $13.30
            </p>
          </div>

          <div className="d-flex">
            <Buton
              className="pickup-btn"
              img={HomeDelivery}
              name="Home Delivery"
            />
            <Buton
              className="click-collect-btn"
              img={ClickCollect}
              name="Click & Collect"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
