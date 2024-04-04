import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzVjN2Y5OWZmOWViYTM0ODg5MDU2ZGQyMWUwMGY4OCIsInN1YiI6IjY2MGU4NTc5ZTE4ZTNmMDE0YWEzMjNhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BlDzup0CQMt8xTqU77bkepqQbjc1aUgAu2zcGdjc_-M",
  },
};

export const fetchFilms = async () => {
  const films = await axios
    .get(url, options)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return films;
};
