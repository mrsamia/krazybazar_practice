import React, { useState } from "react";
import pic1 from "../Images/1.jpg";
import { RxCross2 } from "react-icons/rx";

function CartInnerPart(props) {

  const [value, setValue] = useState(0);

  function IncreaseHandler() {
    setValue(value + 1);
  }
  function  DecClickHandler(){
    setValue(value-1);
  }

  return (
    <div className="row d-flex align-items-center" style={{ height: "80px" }}>
      <div className="col-2">
        <span onClick={IncreaseHandler}>+</span>
        <br></br>
        <span>{value}</span>
        <br></br>
        <span onClick={DecClickHandler}>-</span>
      </div>
      <div className="col-3" style={{ width: "45%" }}>
   {/* <div>
   <img src={pic1} alt="img" />
   </div> */}
       <div>
       <span className="black-bold-text">{props.title}</span>
        <br></br>
        <span style={{ fontWeight: "bold" }}>{props.price}</span>
       </div>
      </div>
      <div className="col-2">
        <p className="d-flex align-items-center" style={{ fontWeight: "bold" }}>
        {props.price}
        </p>
      </div>
      <div className="col-2">
        <RxCross2 />
      </div>
    </div>
  );
}

export default CartInnerPart;
