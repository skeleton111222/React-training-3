import React, { useState, useEffect } from "react";

function Search({ todos, onSearchResult }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(query.toLowerCase())
    );

    onSearchResult(filteredTodos);
  }, [query, todos, onSearchResult]);

  return (
    <input
      type="text"
      placeholder="Search todos..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-input"
    />
  );
}

export default Search;
