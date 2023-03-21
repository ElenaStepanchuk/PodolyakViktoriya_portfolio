import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = () => {
  return (
    <div className={css.nav_container}>
      <NavLink className={css.nav_link} to="home">
        Home
      </NavLink>
      <NavLink className={css.nav_link} to="about">
        About
      </NavLink>
      <NavLink className={css.nav_link} to="portfolio">
        Portfolio
      </NavLink>
      <NavLink className={css.nav_link} to="services">
        Servises
      </NavLink>
      <NavLink className={css.nav_link} to="contact">
        Contact
      </NavLink>
    </div>
  );
};
export default Navigation;
