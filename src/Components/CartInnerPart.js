import React, { useState } from "react";
import pic1 from "../Images/1.jpg";
import { RxCross2 } from "react-icons/rx";

function CartInnerPart(props) {
  const [value, setValue] = useState(0);
 

  function IncreaseHandler() {
    setValue(value + 1);
  }
  function DecClickHandler() {
    setValue(value <= 0 ? value : value - 1);
  }

  return (
    <div className="row d-flex align-items-center ">
      <div className="col-2 p-0">
        <span onClick={IncreaseHandler}>+</span>
        <br></br>
        <span>{value}</span>
        <br></br>
        <span onClick={DecClickHandler}>-</span>
      </div>
      <div className="col-6 p-0 d-flex">
        <div>
          <img className="img-flui" src={pic1} alt="img" />
        </div>
        <div className="d-flex align-items-center">
          <div>
            <span className="black-bold-text">{props.title}</span>
            <br></br>
            <span className="fw-bold">{props.price}</span>
          </div>
        </div>
      </div>
      <div className="col-2 ">
        <p className="d-flex align-items-center fw-bold">{props.price}</p>
      </div>
      <div className="col-2 p-0">
        <RxCross2 />
      </div>
    </div>
  );
}

export default CartInnerPart;
