import React from "react";
import BlackBoldText from "./BlackBoldText";
import Buton from "./Buton";
import HomeDelivery from "../Images/home-delivery-icon.svg";
import ClickCollect from "../Images/click-collect-icon.svg";
import data from "./CardData";
import CartInnerPart from "./CartInnerPart";
import "../Styles/sp.css";

function ShoppingCart(props) {
  return (
    <>
      <div className="cartWrapper ">
        <div className="modal-header">
          <div className="d-flex align-items-center pt-3">
            <BlackBoldText name="Cart 1 Items" />
          </div>
        </div>
        <div style={{ position: "relative" }} className="cartbody">
         <div className="">
         {data.map((item) => {
            return <CartInnerPart title={item.title} price={item.price} />;
          })}

         </div>
         <div style={{position:"absolute"}}>
         <div className="shoppingCart-footer"  >
           
            <div className="ps-3 pt-5 pb-3 shaadow">
              <p className="order-alart">
                Minimum order amount for home delivery is $100
              </p>
            </div>
            <div className="d-flex justify-content-between ps-3 pe-3">
              <BlackBoldText name="Total Amount" />
              <p className="text-danger fw-bold">$13.30</p>
            </div>

            <div className="row">

              <div className="col-6 p-0">
              <Buton
                className="pickup-btn"
                img={HomeDelivery}
                name="Home Delivery"
              />
              </div>
              <div className="col-6 p-0">
              <Buton
                className="click-collect-btn"
                img={ClickCollect}
                name="Click & Collect"
              />
              </div>
              {/* <Buton
                className="pickup-btn"
                img={HomeDelivery}
                name="Home Delivery"
              />
              <Buton
                className="click-collect-btn"
                img={ClickCollect}
                name="Click & Collect"
              /> */}
            </div>
         
          </div>
         </div>
        </div>
        {/* <div className="w-100" style={{ position:"absolute", bottom: 0 }}>
          <div>
            <p className="order-alart">
              Minimum order amount for home delivery is $100
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <BlackBoldText name="Total Amount" />
            <p className="text-danger fw-bold" >
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
        </div> */}
      </div>
    </>
  );
}

export default ShoppingCart;
