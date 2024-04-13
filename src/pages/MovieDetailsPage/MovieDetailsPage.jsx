import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import searchMovies from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./MovieDetailsPage.module.css";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { IoArrowBackSharp } from "react-icons/io5";

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

        const { data } = await searchMovies(`/movie/${movieId}`);

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
      <button className={css.goBackBtn}><IoArrowBackSharp /></button>

      {movie && (
        <>
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
          <div className={css.infoLinks}>
            <Link to="cast">MovieCast</Link>
            <Link to="reviews">MovieReviews</Link>
          </div>
          <Routes>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Routes>
        </>
      )}

      {error && <ErrorMessage />}
    </>
  );
};

export default MovieDetailsPage;
