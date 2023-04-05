import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import ToDoForm from "./components/ToDoForm"

function App() {
  let name = "Yosef";
  const[toDos, setToDos] = useState([]);

  const addToList = task => {
    setToDos([...toDos, task]);
  }

  return (
    <div className="App">
      <Navbar username = {name} />
      <ToDoForm  addToList={addToList}/>
      
      <button class="btn btn-sm btn-warning" id= "clear" type="submit">Clear Tasks</button>
      <div>{toDos.length} Tasks Left to Do</div>
    </div>
    
  );

}

export default App;
