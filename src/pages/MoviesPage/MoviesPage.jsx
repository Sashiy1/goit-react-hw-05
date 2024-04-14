import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import searchMovies from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // console.log("location: ", location);

  const searchQuery = searchParams.get("query");

  const handleSearch = (query) => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchData(searchQuery) {
      
      try {
        setIsLoading(true);
        setError(false);
        setMovies([]);
        const { data } = await searchMovies(
          `/search/movie?query=${searchQuery}`
        );
        if (data.results.length === 0 && searchQuery !== "") {
          toast.error("No results!");
          return;
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <Loader />}
      <MovieList location={location} movies={movies} />
      {error && <ErrorMessage />}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MoviesPage;
