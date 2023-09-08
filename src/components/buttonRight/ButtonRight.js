import React from 'react';

import { AiOutlineRight } from 'react-icons/ai';

import css from './buttonRight.module.css';

const ButtonRight = ({ onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={css.button}>
        <AiOutlineRight className={css.button_icon} />
      </button>
    </>
  );
};
export default ButtonRight;
