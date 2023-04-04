import React from "react";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

function App() {
  let name = "Yosef";
  return (
    <div className="App">
      <Navbar username = {name} />
      <TodoList />
      <input type="text" id="form" placeholder="Enter a task" class="form-control" />
      <button class="btn btn-sm btn-primary" id= "add" type="submit">Add Task</button>
      <button class="btn btn-sm btn-warning" id= "clear" type="submit">Clear Tasks</button>
      <div>0 Tasks Left to Do</div>
    </div>
    
  );

}

export default App;
