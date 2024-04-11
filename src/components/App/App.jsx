import { NavLink } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";

function App() {
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/"  className={css.navLink} >Home</NavLink>
        <NavLink to="/movies" className={css.navLink} >Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
