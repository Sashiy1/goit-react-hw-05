function MovieList({ trendingFilms }) {
  console.log(trendingFilms);
  return (
    <div>
      <ul>
        {trendingFilms !== null &&
          Array.isArray(trendingFilms) &&
          trendingFilms.map((film) => {
            return (
              <li key={film.id}>
                <p>title: {film.title}</p>{" "}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MovieList;
