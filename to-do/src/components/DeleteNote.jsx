import React from "react";
import { MdDelete } from "react-icons/md";

function DeleteNote({ onDelete, id }) {
  return (
    <button
      className="delete-btn"
      onClick={() => onDelete(id)}
      aria-label="Delete note"
    >
      <MdDelete />
    </button>
  );
}

export default DeleteNote;
