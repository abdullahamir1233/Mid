import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex items-center gap-2">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded flex-grow"
      />
      <button type="submit" className="p-2 bg-indigo-600 text-white rounded">
        Search
      </button>
    </form>
  );
}
