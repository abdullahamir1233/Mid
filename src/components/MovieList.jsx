import MovieItem from "./MovieItem";
export default function MovieList({ movies, onAddFavorite, onRemoveFavorite, favorites }) {
  if (!movies.length) return <p>No movies found.</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieItem
          key={movie.imdbID}
          movie={movie}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
        />
      ))}
    </div>
  );
}
