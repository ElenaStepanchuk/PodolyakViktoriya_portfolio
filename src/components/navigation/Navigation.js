import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';
import LocalizedStrings from 'react-localization';

import css from './navigation.module.css';

const Navigation = () => {
  let translate = new LocalizedStrings({
    UA: {
      home: 'Головна',
      about: 'Про мене',
      portfolio: 'Портфоліо',
      contacts: 'Контакти',
    },
    EN: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contacts: 'Contacts',
    },
  });

  const [state, setState] = useState('UA');

  useEffect(() => {
    let leng = localStorage.getItem('language');
    setState(leng);
  }, [state]);

  translate.setLanguage(state);

  return (
    <div className={css.nav_container}>
      <NavLink className={css.nav_link} to="home">
        {translate.home}
      </NavLink>
      <NavLink className={css.nav_link} to="about">
        {translate.about}
      </NavLink>
      <NavLink className={css.nav_link} to="portfolio">
        {translate.portfolio}
      </NavLink>
      <NavLink className={css.nav_link} to="contact">
        {translate.contacts}
      </NavLink>
    </div>
  );
};
export default Navigation;
