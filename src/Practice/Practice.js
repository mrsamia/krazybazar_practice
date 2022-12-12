import React, { useState } from "react";

function Practice(props) {
  const [isRedColor, setRedColor] = useState(false);
  function clickHandler() {
    setRedColor(!isRedColor);
  }
  const isLogin = true;

  //map method
  const name = ["Samia", "Mim", "Rony"];

  return (
    <div>
      {/* onClick with Ternary Operator */}
      <h5 className="pt-3 text-primary">onClick with Ternary Operator</h5>
      <button
        className={isRedColor ? "btn btn-danger" : "btn btn-primary"}
        onClick={clickHandler}
      >
        Button is {isRedColor ? "Danger" : "Primary"}
      </button>
      {/* Ternary Operator */}
      <div>
        <h5 className="pt-3 text-primary">Ternary Operator</h5>
        {isLogin ? "Hi EveryOne" : "hlw"}
      </div>
      {/* && operator */}
      <div>
        <h5 className="pt-3 text-primary">&& operator</h5>
        {isLogin && "Hi EveryOne"}
      </div>

      {/* map method*/}
      <div>
        <h5 className="pt-3 text-primary">Map method</h5>
        {name.map((items) => (
          <h6>{items}</h6>
        ))}
      </div>
      {/* filter method*/}
      <div>
        <h5 className="pt-3 text-primary">filter method</h5>
        {
          name.filter((items) => !items.startsWith("S")) //array,array return,conditionn
        }
      </div>
      {/* filter map method*/}
      <div>
        <h5 className=" pt-3 text-primary">filter with Mapping method</h5>
        {name
          .filter((items) => !items.startsWith("S")) //array,array return,conditionn
          .map((items) => (
            <div>{items}</div>
          ))}
      </div>
    </div>
  );
}

export default Practice;
