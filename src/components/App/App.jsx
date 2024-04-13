import { NavLink } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import clsx from "clsx";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";

function App() {
  const getActiveStyles = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={getActiveStyles}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getActiveStyles}>
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
