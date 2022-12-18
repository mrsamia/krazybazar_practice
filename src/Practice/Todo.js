import React, { useState } from 'react';

function Todo(props) {

//     const[todo,setTodo]=useState("")

// function clickHandler(){
//     setTodo(...todo,todo)
//     console.log("ADD")
// }
// function changeHandler(event){
//     setTodo(event.target.value)
// }
// // function handleSubmit(e) {
// //     e.preventDefault();
// //     // setShowName(true);
// //     setTodo(e.target.value)
    
// //   }

//     return (
//         <div className='pt-5 pb-5'>
//            <form >
//            <input type="text" id="lname" name="lname" onChange={changeHandler} />
//              <button onClick={clickHandler}>ADD</button>
//            </form>
//              <div>
//                 <h3><li>{todo}</li></h3>
//              </div>
//         </div>
//     );

const [inputValue, setInputValue] = useState('');
const [values, setValues] = useState([]);
function addValue() {
    setValues([...values, inputValue]);
    setInputValue('');
  }
  function changeHandler(event){
    setInputValue(event.target.value)
  }
return (
    <div className='pt-5 pb-5'>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <button onClick={addValue}>Add</button>
      <ul>
      {values.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
    </div>
  );

}

export default Todo;