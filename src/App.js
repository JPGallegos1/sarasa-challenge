import { useEffect } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import SearchMovie from "./components/SearchMovie";
import MoviesList from "./components/MoviesList";

function App() {
  const history = useHistory();

  useEffect(() => {
    const movies = localStorage.getItem("movies");
    if (!movies) {
      history.push("/movies/search");
    }
  }, [history]);

  return (
    <div className="App">
      <Switch>
        <Route path="/movies/search" component={SearchMovie} />
        <Route path="/movies/list" component={MoviesList} />
      </Switch>
    </div>
  );
}

export default App;
