import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Buton from "./Buton";
import HomeDelivery from "../Images/home-delivery-icon.svg";
import ClickCollect from "../Images/click-collect-icon.svg";
import BlackBoldText from "./BlackBoldText";

function AddToCartBtn(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <Button className="cart-button" onClick={handleShow}>
        Add to Cart
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="right"
        centered
    
      >
        <Modal.Header closeButton className="modal-header">
      <div className="d-flex align-items-center pt-3">
      <BlackBoldText name="Cart 1 Items" />
      </div>
        </Modal.Header>
        <Modal.Body>
          <div className="pt-5 pb-5">

          </div>
         <div>
          <p className="order-alart"> Minimum order amount for home delivery is $100 </p>
         </div>
          <div className="d-flex justify-content-between">
            <BlackBoldText name="Total Amount" />
            <p className="" style={{ color: "red", fontWeight: "bold" }}>
              $13.30
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footerWrapper">
          <div className="w-100 d-flex" style={{ position: "absolute" }}>
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
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddToCartBtn;
