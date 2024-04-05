import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzVjN2Y5OWZmOWViYTM0ODg5MDU2ZGQyMWUwMGY4OCIsInN1YiI6IjY2MGU4NTc5ZTE4ZTNmMDE0YWEzMjNhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BlDzup0CQMt8xTqU77bkepqQbjc1aUgAu2zcGdjc_-M",
  },
};

export const requestFilms = async () => {
  const  data  = await axios
    .get(url, options)

  return   data;
};
