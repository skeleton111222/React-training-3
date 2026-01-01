import React, { useState } from "react";

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
          Update
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
              Save
            </button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UpdateNote;
