import { useNavigate } from 'react-router-dom';

export default function MovieItem({ movie, onAddFavorite, onRemoveFavorite, isFavorite }) {
  const navigate = useNavigate();

  // Handle click to show movie details
  const handleItemClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div 
      onClick={handleItemClick} 
      className="p-4 border rounded-lg shadow-md bg-white cursor-pointer hover:shadow-xl transition duration-300"
    >
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-t-md"
      />
      <div className="mt-2">
        <h3 className="text-lg font-bold">{movie.Title}</h3>
        <p className="text-sm text-gray-600">Year: {movie.Year}</p>

        {/* Conditional rendering of Add/Remove buttons */}
        {isFavorite ? (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigation on button click
              onRemoveFavorite(movie.imdbID);
            }}
            className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition duration-300"
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigation on button click
              onAddFavorite(movie);
            }}
            className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition duration-300"
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
}
