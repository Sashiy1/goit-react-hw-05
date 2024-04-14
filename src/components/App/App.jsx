import Loader from "../Loader/Loader";

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../Layout/Layout";

const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));

function App() {
  return (
    <Layout>
      <Suspense>
        <Routes fallback={<Loader />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
