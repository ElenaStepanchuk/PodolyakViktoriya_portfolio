import React from 'react';

import { AiOutlineLeft } from 'react-icons/ai';

import css from './buttonLeft.module.css';

const ButtonLeft = ({ onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={css.button}>
        <AiOutlineLeft className={css.button_icon} />
      </button>
    </>
  );
};
export default ButtonLeft;
