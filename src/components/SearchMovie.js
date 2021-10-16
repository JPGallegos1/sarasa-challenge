import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SearchMovie() {
  const { movieTitle, setMovieTitle, setMovies } = useContext(MoviesContext);
  const history = useHistory();

  const onSubmitMovie = async (e) => {
    e.preventDefault();
    const url = `https://imdb-api.com/en/API/SearchMovie/k_l3v4yi1h/${movieTitle}`;
    const moviesResponse = await axios.get(url);
    localStorage.setItem("movies", JSON.stringify(moviesResponse.data.results));
    setMovies(moviesResponse.data.results);
    history.push("/movies/list");
  };

  return (
    <div>
      <h3>Search movie page</h3>
      <form onSubmit={onSubmitMovie}>
        <div>
          <label>Movie Title</label>
          <input type="text" onChange={(e) => setMovieTitle(e.target.value)} />
          <p>Try "Venom" or "Spiderman"</p>
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}
