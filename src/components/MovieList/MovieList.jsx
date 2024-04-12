import { Link } from "react-router-dom";
import css from "./MovieList.module.css/"

function MovieList({ movies }) {

  return (
    <div>
      <ul className={css.movieList}>
        {movies !== null &&
          Array.isArray(movies) &&
          movies.map((movie) => {
            
            return (
              <li key={movie.id}>
                
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MovieList;
