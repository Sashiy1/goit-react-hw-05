import MovieList from "../../components/MovieList/MovieList";
import searchMovies from "../../../src/services/api";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(false);
        setMovies([]);
        const { data } = await searchMovies(`/trending/movie/day`);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
      {error && <ErrorMessage />}
    </>
  );
};

export default HomePage;
