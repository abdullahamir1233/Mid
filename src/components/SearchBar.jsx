// SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="p-4">
      <input 
        type="text" 
        placeholder="Search movies..." 
        className="border p-2 rounded-md w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button type="submit" className="bg-indigo-600 text-white p-2 rounded-md mt-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
