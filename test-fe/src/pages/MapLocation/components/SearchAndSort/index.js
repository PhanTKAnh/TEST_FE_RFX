import { useState, useEffect } from "react";

export default function SearchAndSort({ searchTerm, setSearchTerm, onSort }) {
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300);

    return () => clearTimeout(handler); 
  }, [inputValue, setSearchTerm]);

  return (
    <div className="ml-search-sort">
      <input
        className="ml-search-input"
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="ml-sort-btn" onClick={onSort}>
        Sort by Rating
      </button>
    </div>
  );
}
