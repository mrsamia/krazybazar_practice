import React, { useState } from "react";

function InputFormTwo(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullnaame, setFullname] = useState("");
  const [roll, setRoll] = useState();

  const valueO = 1;
  const valueT = 2;
  const sum = valueO + valueT;
  const fname = "Samia";
  const lname = "Rahman";

function firstName(event){
    setFirstname(event.target.value)
   
}
function lastName(event){
    setLastname(event.target.value)
}
function Roll(event){
    setRoll(parseFloat(event.target.value))
}
function fullName(){     
    setFullname(fullname) 
    setFirstname("");  
    setLastname("");
}

const fullname=" "+firstname+" "+lastname;

  return (
    <div>
      <h3>Sum:{valueO + valueT}</h3>
      <h3>sum:{sum}</h3>
      <h3>FullName:{" " + fname + " " + lname}</h3>

      <div className="pt-5 pb-5">
        <input type="text" placeholder="FirstName" value={firstname} onChange={firstName} />
        <input type="text" placeholder="LastName" value={lastname} onChange={lastName}  />
        <button onClick={fullName}>Add</button>
        <input type="number" placeholder="Roll" onChange={Roll}/>
      
      </div>
      <div>
        <h3>FirstName:{firstname}</h3>
        <h3>LastName:{lastname}</h3>
        <h3>Roll:{roll}</h3>
        <h3>FullName:{fullname}</h3>
      </div>
    </div>
  );
}

export default InputFormTwo;
