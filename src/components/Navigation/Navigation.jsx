import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
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
 
    </>
  );
};

export default Navigation;
