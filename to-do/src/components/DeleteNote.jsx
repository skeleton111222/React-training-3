import React from "react";

function DeleteNote({ onDelete, id }) {
  return (
    <button className="delete-btn" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default DeleteNote;
