import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import searchMovies from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchData(query) {
      try {
        setIsLoading(true);
        setError(false);
        setMovies([]);
        const { data } = await searchMovies(`/search/movie`, query);

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
      <MovieList movies={movies} />
      {error && <ErrorMessage />}
    </div>
  );
};

export default MoviesPage;
