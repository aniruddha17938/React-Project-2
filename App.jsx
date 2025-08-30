import React, { useState } from "react"; 
import './App.css' 

const ToDo = () => {
  const [task, setTask] = useState([]); 
  const [taskValue, setTaskValue] = useState(""); 

  const handlerAddTask = () => {
    if (taskValue !== "") {
      setTask([...task, taskValue]);
      setTaskValue(""); 
    }
  }; 

  const handlerRemoveTask = (index) => { 
    const list = [...task]; 
    list.splice(index, 1); 
    setTask(list); 
  };

    return (
        <>
          <h1>ToDo App</h1>
          <input
            type="text"
            value={taskValue}
            onChange={(event) => setTaskValue(event.target.value)}
          />
          <button onClick={handlerAddTask}>Add Task</button>
          <ul>
            {task.map((item, index) => (
              <li key={index}>
                {item} 
                <button onClick={() => handlerRemoveTask(index)}>Remove</button> 
              </li>
            ))}
          </ul>
        </>
      );
    };

export default ToDo; 






 






