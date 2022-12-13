import React, { useEffect, useState } from "react";

function MultiplicationBtn(props) {
  const value= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const convertnum = parseInt();

  const[form,setForm]=useState(0)

//   function clickHandler() {
//     setForm(value);
//   }
  function onChangeHandler(event) {
    console.log(typeof event.target.value,'oioioi');
    setForm(parseInt(event.target.value));
  }

  //for loop console log
  //   useEffect(() => {
  //     for (let i = 1; i <= 10; i++)
  //     console.log("5 * " + i + " = " + (i * 5));
  //   });
  return (
    <div className="pt-5 pb-5">
      <input type="number" placeholder="Number" onChange={onChangeHandler} />
      {/* <button className="btn btn-primary" onClick={clickHandler}>
        Multiply
      </button> */}
      <div>
        {value.map((item) => (
            
          <p>
            {/* {typeof form} */}
            {item} * {form} = {item * form }
          </p>
        ))}
      </div>
      <h6>{value}</h6>
    </div>
  );
}

export default MultiplicationBtn;
