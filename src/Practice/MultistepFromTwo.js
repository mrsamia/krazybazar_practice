import React, { useState } from "react";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
// import StepOne from "./StepOne";
// import StepTwo from "./StepTwo";

function MultistepFromTwo(props) {
  const [activeState, setActiveState] = useState(0); 

  function ClickHandler() {
    setActiveState(0);
  }
  function ClickHandler2() {
    setActiveState(1);
  }
  function ClickHandler3() {
    setActiveState(2);
  }
  return (
    <div className="container pt-5 pb-5 ">
      <h5 className="pt-3 text-primary">Multistep Form without using React Package</h5>
      <div className="d-flex justify-content-between border-bottom">
        <div>
          <h6 onClick={ClickHandler}>StepOne</h6>
          <div>{activeState}</div>
          <div>{activeState === 0 ? <StepOne /> : ""}</div>
        </div>
        <div>
          <h6 onClick={ClickHandler2}>StepTwo</h6>
          <div>{activeState === 1 ? <StepTwo /> : ""}</div>
        </div>
        <div>
          <h6 onClick={ClickHandler3}>StepThree</h6>
          <div>{activeState === 2 ? <StepThree /> : ""}</div>
        </div>
      </div>
    </div>
  );
}

export default MultistepFromTwo;
