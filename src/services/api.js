import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default async function searchMovies(endpoint) {

  const response = await axios.get(endpoint, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzVjN2Y5OWZmOWViYTM0ODg5MDU2ZGQyMWUwMGY4OCIsInN1YiI6IjY2MGU4NTc5ZTE4ZTNmMDE0YWEzMjNhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BlDzup0CQMt8xTqU77bkepqQbjc1aUgAu2zcGdjc_-M",
    },
  });
  return response;
}
