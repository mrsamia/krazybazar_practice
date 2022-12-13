import React, { useState } from 'react';

function InputForm(props) {
    const [form,setForm]=useState({name:"Mim"})

    function onChangeHandler2(event){
        setForm(event.target.value)
    }

    return (
        <div>
             <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" onChange={onChangeHandler2}/>
      <h6>{form.name}</h6>
        </div>
    );
}

export default InputForm;