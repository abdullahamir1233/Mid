import React from 'react';
import MovieItem from './MovieItem';

const MovieList = () => {
  const movies = [
    { id: 1, title: 'Inception', releaseDate: '2010', rating: '8.8' },
    { id: 2, title: 'The Dark Knight', releaseDate: '2008', rating: '9.0' },
    { id: 3, title: 'Interstellar', releaseDate: '2014', rating: '8.6' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
