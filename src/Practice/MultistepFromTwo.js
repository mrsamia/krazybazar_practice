import React, { useState } from "react";
// import StepOne from "./StepOne";
// import StepTwo from "./StepTwo";

function MultistepFromTwo(props) {
  const [activeState, setActiveState] = useState(1);
  function ClickHandler() {
    setActiveState(activeState + 1);
  }
  return (
    <div className="container pt-5 pb-5 ">
      <div className="d-flex justify-content-between border-bottom">
        <h6 onClick={ClickHandler}>StepOne</h6>
        <h6>StepTwo</h6>
      </div>
    </div>
  );
}

export default MultistepFromTwo;
