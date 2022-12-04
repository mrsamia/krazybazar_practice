import React, { useState } from "react";

function Increment(props) {
  const [value, setValue] = useState(0);

  function IncreaseHandler() {
    setValue(value + 1);
  }
  function  DecClickHandler(){
    setValue(value-1);
  }
  return (
           <div className="d-flex justify-content-between align-items-center">
            <div onClick={IncreaseHandler}>
              <p className="add">+</p>
            </div>
            <div>
              <p style={{margin:"auto"}}>{value}</p>
             </div>
             <div onClick={DecClickHandler}>
               <p className="add">-</p>
             </div>
           </div>
       
  );
}

export default Increment;
