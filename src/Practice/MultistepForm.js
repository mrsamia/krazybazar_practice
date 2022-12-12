import React from "react";
import Multistep from "react-multistep";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function MultistepForm(props) {
  const steps = [
    { title: "StepOne", component: <StepOne /> },
    { title: "StepTwo", component: <StepTwo /> },
  ];
  return (
    <div className="pt-5">
      <div className="d-flex justify-content-center">
        <h5 className="pt-3 text-primary">Multistep Form using React Package</h5>
      </div>
      <div className="d-flex justify-content-center">
        <Multistep activeStep={1} showNavigation={true} steps={steps} />
      </div>
    </div>
  );
}

export default MultistepForm;
