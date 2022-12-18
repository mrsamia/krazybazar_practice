import React, { useState } from "react";

function TodoTwo(props) {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  //   const[delte, setDelte] = useState()

  function clickHandler() {
    setList([...list, input+"-A"]);
    setInput("");
  }

  function changeHandler(e) {
    setInput(e.target.value );
  }

//   const removeTask = (index) => {
//     const newTasks = [...list];
//     newTasks.splice(index, 1);
//     setList(newTasks);
//   };

//not working
//  function removeTask(index){
//     const deleteTask=[...list];
//     deleteTask.slice(index,1)
//     setList(deleteTask);
// }

  return (
    <div className="pb-5">
      <input type="text" value={input} onChange={changeHandler} />
      <button onClick={clickHandler}>Add</button>
      <div>
        <h3>
          {list.map((item) => (
            <div className="container d-flex">
              <li>{item}</li>
              {/* <button onClick={() => removeTask()}>delete</button> */}
              {/* <button onClick={removeTask}>delete</button> */}
              <button>delete</button>
            </div>
          ))}
        </h3>
      </div>
    </div>
  );
}

export default TodoTwo;
