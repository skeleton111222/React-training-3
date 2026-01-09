import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function AddNote({ onAdd, maxChars = 200 }) {
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
        maxLength={maxChars}
      />

      <div className="char-count">
        {input.length} / {maxChars}
      </div>

      <button className="add-btn" onClick={handleAdd} disabled={!input.trim()}>
        <IoMdAdd />
      </button>
    </div>
  );
}

export default AddNote;
