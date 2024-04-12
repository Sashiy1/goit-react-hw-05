import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import searchMovies from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./MovieDetailsPage.module.css"
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(false);

        const { data } = await searchMovies(`/movie/${movieId}`, movieId);

        console.log(data);
       
        setMovie(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <button>Go Back</button>

      {movie && (
        <div className={css.detailsBox}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={css.detailsBoxInfo}>
            <h1>{movie.title}</h1>
            <p>User score: {Math.floor(movie.vote_average * 10)}%</p>

            {movie.overview && (
              <>
                <h3>Overwiew</h3>
                <p>{movie.overview}</p>
              </>
            )}

            {movie.genres && movie.genres.length > 0 && (
              <>
                <h3>Genres</h3>
                <p>{movie.genres.map((genre) => genre.name).join(" ")}</p>
              </>
            )}
          </div>
        </div>
      )}
    <MovieCast />
    <MovieReviews />
      {error && <ErrorMessage />}
    </>
  );
};

export default MovieDetailsPage;
