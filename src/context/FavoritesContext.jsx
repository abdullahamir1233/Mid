import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites((prev) =>
      prev.find((fav) => fav.imdbID === movie.imdbID) ? prev : [...prev, movie]
    );
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
