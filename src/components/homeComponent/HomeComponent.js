import React from 'react';

import { BsInstagram } from 'react-icons/bs';
import { RiTelegramLine } from 'react-icons/ri';
import { FaViber } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';

import SelectLenguage from 'components/selectLenguage';

import css from './homeComponent.module.css';
const HomeComponent = () => {
  return (
    <div className={css.container_home}>
      <div className={css.backdrop}>
        <div className={css.container_social_link}>
          <a
            className={css.social_link_instagram}
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/_light_ray__/"
          >
            <BsInstagram className={css.social_icon_instagram} />
          </a>
          <a
            className={css.social_link}
            target="_blank"
            rel="noreferrer"
            href="https://t.me/vika_636"
          >
            <RiTelegramLine className={css.social_icon_telegram} />
          </a>
          <a
            className={css.social_link}
            target="_blank"
            rel="noreferrer"
            href="viber:+380931380857"
          >
            <FaViber className={css.social_icon_viber} />
          </a>
        </div>
        <div className={css.container_home_logotipe}>
          <p className={css.home_logotipe}>VictoriyaPodolyak</p>
        </div>
        <SelectLenguage top={'70px'} right={'150px'} />
        <h1 className={css.home_tittle}>
          Architect <br /> Victoria Podolyak
        </h1>
        <SlArrowDown className={css.arrow_icon} />
      </div>
    </div>
  );
};
export default HomeComponent;
