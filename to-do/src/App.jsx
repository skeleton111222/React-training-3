import React from "react";
import Todo from "./components/Todo";
import "./styles/index.css"; // Global CSS styles

function App() {
  return (
    <div className="App">
      <h3 className="to-do">To-Do</h3>
      <Todo />
    </div>
  );
}

export default App;
