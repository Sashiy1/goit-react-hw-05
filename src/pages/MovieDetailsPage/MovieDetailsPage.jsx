import css from "./MovieDetailsPage.module.css";
import searchMovies from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const backLinkRef = useRef(location.state ?? `/movies`);
  const defaultImg =
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/09/13/20/26-Petro-Poroshenko-AFP-Getty.jpg";

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
      <Link to={backLinkRef.current}>
        <button className={css.goBackBtn}>
          <IoArrowBackSharp />
        </button>
      </Link>

      {movie && (
        <>
          <div className={css.detailsBox}>
            <img className={css.detailsBoxPoster}
              src={ 
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : defaultImg
              }
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
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Routes>
          </Suspense>
        </>
      )}

      {error && <ErrorMessage />}
    </>
  );
};

export default MovieDetailsPage;
