import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=59a2dc8c`);
      setMovie(res.data);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading movie details...</p>;

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <p>Released: {movie.Released}</p>
      <p>Rating: {movie.imdbRating}</p>
    </div>
  );
}
