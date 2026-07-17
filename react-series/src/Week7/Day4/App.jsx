import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {

  const API_KEY = "9354c80d";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Avengers");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    fetchMovies();

  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timer);

  }, [search]);

  const fetchMovies = async () => {

    setLoading(true);

    try {

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
      );

      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }

    } catch (error) {
      console.log(error);
    }

    setLoading(false);

  };

  const filteredMovies =
    category === "all"
      ? movies
      : movies.filter((movie) => movie.Type === category);

  return (

    <div className="container">

      <h1>Movie Explorer</h1>

      <div className="controls">

        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>

      </div>

      {loading ? (

        <div className="loading">

          Loading Movies...

        </div>

      ) : filteredMovies.length === 0 ? (

        <div className="empty">

          <h2>No Movies Found</h2>

          <p>Try another movie name.</p>

        </div>

      ) : (

        <div className="movie-grid">

          {filteredMovies.map((movie) => (

            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />

          ))}

        </div>

      )}

    </div>

  );
}

export default App;