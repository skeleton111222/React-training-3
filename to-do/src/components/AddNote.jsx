import React, { useState } from "react";

function AddNote({ onAdd }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <div className="add-note">
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Enter todo item"
        rows="4"
        cols="50"
      />
      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default AddNote;
