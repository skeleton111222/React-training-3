import React from "react";
import DeleteNote from "./DeleteNote";
import UpdateNote from "./UpdateNote";

function DisplayNotes({ todos, onDelete, onUpdate }) {
  if (todos.length === 0) {
    return <p style={{ textAlign: "center" }}>No todos available</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <div className="todo-text-wrapper">
            <span className="todo-text">{todo.text}</span>
            <span className="todo-date">{todo.date}</span>
          </div>
          <div className="todo-actions">
            <UpdateNote onUpdate={onUpdate} todo={todo} id={todo.id} />
            <DeleteNote onDelete={onDelete} id={todo.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DisplayNotes;
