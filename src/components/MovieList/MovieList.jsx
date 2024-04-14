import { Link } from "react-router-dom";
import css from "./MovieList.module.css/";

function MovieList({ movies, location }) {

  const defaultImg = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/09/13/20/26-Petro-Poroshenko-AFP-Getty.jpg';

  return (
    <div>
      <ul className={css.movieList}>
        {movies !== null &&
          Array.isArray(movies) &&
          movies.map((movie) => {
            console.log(movie);
            return (
              <li key={movie.id}>
                <Link state={location} to={`/movies/${movie.id}`}>
                  <img className={css.movieListPoster}
                    src={movie.poster_path ?   `https://image.tmdb.org/t/p/w300${movie.poster_path}` : defaultImg}
                    alt={movie.title}
                  />
                  <p className={css.movieListTitle}>{movie.title}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MovieList;
