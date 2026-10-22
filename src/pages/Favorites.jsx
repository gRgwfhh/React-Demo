import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else (
    <div className="favorites-empty">
      <h2>No Favorites Movies Yet.</h2>
      <p>Start Adding Movies To Your Favorites And They Will Appear Here</p>
    </div>
  );
}

export default Favorites;
