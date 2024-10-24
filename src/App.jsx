import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import SearchBar from './components/SearchBar';

const App = () => {
  const handleSearch = (query) => {
    console.log('Search query:', query); 
  };

  return (
    <Router>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
