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
                <a href="">{movie.title}</a>
                
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MovieList;
