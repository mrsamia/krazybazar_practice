import React from "react";

function StepTwo(props) {
  return (
    <div class="tab">
      {/* <h6>Step Two</h6> */}
      <div>
      Contact Info:
      <p>
        <input
          placeholder="E-mail..."
          oninput="this.className = ''"
          name="email"
        />
      </p>
      <p>
        <input
          placeholder="Phone..."
          oninput="this.className = ''"
          name="phone"
        />
      </p>
      </div>
    </div>
  );
}

export default StepTwo;
