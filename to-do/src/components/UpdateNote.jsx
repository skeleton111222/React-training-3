import React, { useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";
function UpdateNote({ onUpdate, todo, id }) {
  const [newTodo, setNewTodo] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    if (newTodo.trim()) {
      onUpdate(id, newTodo); // use id here
      setIsEditing(false);
    }
  };

  return (
    <div>
      {!isEditing ? (
        <button className="update-btn" onClick={() => setIsEditing(true)}>
          <GrUpdate />
        </button>
      ) : (
        <>
          <textarea
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            rows="4"
            cols="50"
          />
          <div className="button-group">
            <button className="save-btn" onClick={handleUpdate}>
              <IoIosSave />
            </button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>
              <MdCancel />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UpdateNote;
