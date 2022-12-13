import React from "react";

function StepOne(props) {
  return (
    <div class="tab">
      {/* <h6>Step One</h6> */}
      <div>
      Name:
        <p>
          <input
            placeholder="First name..."
            oninput="this.className = ''"
            name="fname"
          />
        </p>
        <p>
          <input
            placeholder="Last name..."
            oninput="this.className = ''"
            name="lname"
          />
        </p>
      </div>
      </div>
  );
}

export default StepOne;
