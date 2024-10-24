// Favorites.jsx
// Favorites.jsx
import React from "react";
import MovieItem from "./MovieItem"; // Adjust the path to match your structure

const Favorites = () => {
  const favoriteMovies = [
    { id: 1, title: 'Inception', releaseDate: '2010', rating: '8.8' }
    // Add more if needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {favoriteMovies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Favorites;
