import { createContext, useState } from "react";

export const MoviesContext = createContext(null);

export default function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");

  const context = {
    movies,
    setMovies,
    movieTitle,
    setMovieTitle,
  };

  return (
    <MoviesContext.Provider value={context}>{children}</MoviesContext.Provider>
  );
}
