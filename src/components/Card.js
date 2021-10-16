import { Link } from "react-router-dom";

export default function Card({ movies }) {
  return (
    <div>
      <h3>Movie List Page</h3>
      <Link to="/movies/search">Back to Search Page</Link>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className="card__search-movie">
              <img src={movie.image} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
