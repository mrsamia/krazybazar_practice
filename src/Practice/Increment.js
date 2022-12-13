
import React, { useState } from "react";

function Increment(props) {
  const [value, setValue] = useState(0);
    function Add() {
      setValue( value + 1);
    }
  function minus() {
    //first Way
    // if (value > 0) {
    //     setValue(value-1);
    // }

   //2nd way
    setValue(value<=0?value:value-1)

    //3rd way
    // setValue((value)=> {
    //     if (value <=0) {
    //         return value;
    //     }
    //     return value-1;
    // });
  }

  return (
    <div className="pt-5 pb-5">
      <button className="btn btn-primary" onClick={Add}>+</button>
      <h4>{value}</h4>
      <button button className="btn btn-primary" onClick={minus}>-</button>
    </div>
  );
}

export default Increment;
