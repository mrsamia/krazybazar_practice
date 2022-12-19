import React, { useState } from "react";

function EPform(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpas, setConfirmpas] = useState();
  const[show ,setShow]=useState(false)
  const[active ,setActive]=useState(false)


  function emailHandler(event) {
    setEmail(event.target.value);
  }
  function passHandler(event) {
    setPassword(event.target.value);
  }
  function confirmPasHandler(event) {
    setConfirmpas(event.target.value);
  }
function clickHandler(){
    setShow(!show)
}

  return (
    <div className="pb-5">
      <div>
        <h6>Email:</h6>
        <input type="email" placeholder="Email" onChange={emailHandler} />
      </div>
      <div>
        <h6>Password :</h6>
        <input type={show ?"password":"text"} placeholder="Password" value={password} onChange={passHandler} onClick={clickHandler}/>
      </div>
      <div>
        <h6>Confirm Password :</h6>
        <input
          type="password"
          value={confirmpas}
          placeholder="Confirm Password"
          onChange={confirmPasHandler}  
        />
      </div>
      {/* <div>
      { password===confirmpas? <button >Submit</button>:
        <button disabled>Submit</button>}
      </div> */}
      <button disabled={password===confirmpas?false:true}>Submit</button>
    
    </div>
  );
}

export default EPform;
