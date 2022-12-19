import React, { useState } from "react";

function TodoApp(props) {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function changeHandler(event) {
    setInput(event.target.value);
  }
  function clickHandler() {
    setTodo(settodo);
    setInput("");
  }
  const settodo = [...todo, input];

  return (
    <div className="pb-5">
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>Add</button>
      <h3>{input}</h3>
      <div>
        {todo.map((item,index) => (
          <div className="container d-flex justify-content-center" key={index}>
            <li>{item}</li>
            <button>delete</button>
          </div>
        ))}
      </div>    
    </div>
  );
}

export default TodoApp;
