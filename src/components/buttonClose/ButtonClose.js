import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';

import css from './buttonClose.module.css';

const ButtonClose = () => {
  const navigate = useNavigate();

  const closeGallery = () => {
    navigate('/portfolio');
  };

  return (
    <>
      <button type="button" onClick={closeGallery} className={css.button}>
        <VscChromeClose className={css.button_icon} />
      </button>
    </>
  );
};
export default ButtonClose;
