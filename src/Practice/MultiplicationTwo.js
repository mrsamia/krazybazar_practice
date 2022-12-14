import React, { useState } from 'react';

function MultiplicationTwo(props) {
const value=[1,2,3,4,5,6,7,8,9,10]
const [form, setForm]=useState()

function ChangeHandler(event){
    setForm(parseInt(event.target.value))
}
    return (
        <div className='pt-5 pb-5'>
            <input type="number" placeholder="Number" onChange={ChangeHandler}/>
            <h6>{form}</h6>
            <div>
                {
                    value.map((item)=>(
                      <p> {item}*{form}={form*item}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default MultiplicationTwo;