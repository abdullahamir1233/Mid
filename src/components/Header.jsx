// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Movie Explorer</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

