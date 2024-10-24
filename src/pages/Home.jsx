import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import { FavoritesContext } from '../context/FavoritesContext';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchInitialMovies = async () => {
      setLoading(true);
      const res = await axios.get(`http://www.omdbapi.com/?s=Marvel&apikey=59a2dc8c`);
      setMovies(res.data.Search || []);
      setLoading(false);
    };
    fetchInitialMovies();
  }, []);

  const searchMovies = async (query) => {
    setLoading(true);
    const res = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=59a2dc8c`);
    setMovies(res.data.Search || []);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <SearchBar onSearch={searchMovies} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MovieList
          movies={movies}
          onAddFavorite={addFavorite}
          onRemoveFavorite={removeFavorite}
          favorites={favorites}
        />
      )}
    </div>
  );
}
