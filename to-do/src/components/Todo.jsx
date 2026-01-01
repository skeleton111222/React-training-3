import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid"; // import nanoid
import AddNote from "./AddNote";
import DisplayNotes from "./DisplayNotes";
import "../styles/Todo.css";

function Todo() {
  const [todoList, setTodoList] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todoList");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      if (todoList.length > 0) {
        localStorage.setItem("todoList", JSON.stringify(todoList));
      } else {
        localStorage.removeItem("todoList");
      }
    } catch (error) {
      console.error("Error saving todos to localStorage:", error);
    }
  }, [todoList]);

  // Add new todo with unique ID and date
  const handleAdd = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: nanoid(), // unique ID from nanoid
        text,
        date: new Date().toLocaleString(), // current date & time
      };
      setTodoList([...todoList, newTodo]);
    }
  };

  // Delete by id
  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  // Update by id
  const handleUpdate = (id, newText) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <AddNote onAdd={handleAdd} />
      <DisplayNotes
        todos={todoList}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default Todo;
