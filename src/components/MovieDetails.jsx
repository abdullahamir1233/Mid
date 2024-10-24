
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  // For now, hardcoded data
  const movie = {
    title: 'Inception',
    releaseDate: '2010',
    rating: '8.8',
    description: 'A mind-bending thriller about dream invasion.'
  };

  return (
    <div className="container mx-auto p-4">
      <div className="h-64 bg-gray-300 mb-4"> {/* Placeholder for Image */} </div>
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
