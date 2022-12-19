import React, { useState } from 'react';

function InputCalculate(props) {
const[firstnum,setFirstnum]=useState()
const[sign,setSign]=useState("")
const[lastnum,setLastnum]=useState()
const[result,setResult]=useState()

function Firstnum(event){
    setFirstnum(parseFloat(event.target.value));
}
function Lastnum(event){
    setLastnum(parseFloat(event.target.value));
}
function Sign(event){
    setSign(event.target.value);
}
function clickHandler(){
    setResult(Result)
}

function calculate(x, y, sign) {
    if (sign === "+") {
      return x + y;
    } else if (sign === "-") {
      return x - y;
    } else if (sign === "*") {
      return x * y;
    } else if (sign === "/") {
      return x / y;
    } else {
      return "Invalid sign";
    }
  }
 const Result= (calculate(firstnum, lastnum, sign));
    return (
        <div className='pt-5 pb-5'>
            <input type="number" placeholder="FirstNum" onChange={Firstnum}/>
            <input type="text" placeholder="Sign" onChange={Sign} />
            <input type="number" placeholder="LastNum" onChange={Lastnum}/>
            <button onClick={clickHandler}>Add</button>
            <div>
                <h6>FirstNum: {firstnum}</h6>
                <h6>Sign: {sign}</h6>
                <h6>LastNum: {lastnum}</h6>
                <h6>Result: {result}</h6>
            </div>
        </div>
    );
}

export default InputCalculate;