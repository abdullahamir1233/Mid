import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieList from '../components/MovieList';

export default function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Favorite Movies</h2>
      {favorites.length ? (
        <MovieList
          movies={favorites}
          onRemoveFavorite={removeFavorite}
          favorites={favorites}
        />
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}
