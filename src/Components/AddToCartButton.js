import React, { useState } from "react";
import Increment from "./Increment";

function AddToCartButton(props) {
  const [value, setValue] = useState(0);
  const [show,setShow]=useState(true)

  function IncreaseHandler() {
    setValue(value + 1);
  }
  function DecClickHandler() {
    setValue(value - 1);
  }
  
function clickHandler(){
    setShow(!show)
}
  return (

    <button className="cart-button"  onClick={clickHandler}>{show?"Add to Cart":<Increment/>}</button>
    // <div>
    //   <div className="header">
    //     {/* <button className="cart-button"  onClick={props.onClick}>Add to Cart</button>     */}
    //     <button className="cart-button ">
    //       <div className="d-flex justify-content-between align-items-center">
    //         <div onClick={IncreaseHandler}>
    //           <p className="add">+</p>
    //         </div>
    //         <div>
    //           <p style={{margin:"auto"}}>{value}</p>
    //         </div>
    //         <div onClick={DecClickHandler}>
    //           <p className="add">-</p>
    //         </div>
    //       </div>
    //     </button>
    //   </div>
    // </div>
    //  {/* <button className="cart-button"  onClick={props.onClick}>Add to Cart</button> 
 
  );
}

export default AddToCartButton;
