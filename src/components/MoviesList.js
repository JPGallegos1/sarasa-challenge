import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Card from "./Card";

export default function MoviesList() {
  const { movies } = useContext(MoviesContext);
  console.log(movies);

  return <Card movies={movies} />;
}
