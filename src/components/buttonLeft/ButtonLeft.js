import React from 'react';

import { AiOutlineLeft } from 'react-icons/ai';

import css from './buttonLeft.module.css';

const ButtonLeft = ({ onClick }) => {
  // const left = () => {
  //   if (index > 0) {
  //     index = index - 1;
  //     console.log(index);
  //   } else {
  //     index = length;
  //     console.log(index);
  //   }
  //   return;
  // };

  return (
    <>
      <button type="button" onClick={onClick} className={css.button}>
        {/* <button type="button" onClick={left} className={css.button}> */}
        <AiOutlineLeft className={css.button_icon} />
      </button>
    </>
  );
};
export default ButtonLeft;
