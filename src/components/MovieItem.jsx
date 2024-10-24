// MovieItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg">
      <div className="h-48 bg-gray-300 mb-4"> {/* Placeholder for Image */} </div>
      <h2 className="text-lg font-semibold">{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movie/${movie.id}`} className="text-indigo-600 mt-2 block">View Details</Link>
    </div>
  );
};

export default MovieItem;
