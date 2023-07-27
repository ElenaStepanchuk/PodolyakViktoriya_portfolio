import React from 'react';

import css from './modalWindow.module.css';

const ModalWindow = ({
  text,
  clickFunction,
  chooseFunction,
  isModalOpen = false,
  selectList = [],
}) => {
  return (
    <div>
      <div onClick={clickFunction}>
        <span className={css.currentText}>{text}</span>
      </div>
      {isModalOpen && (
        <ul className={css.list}>
          {selectList.map(item => {
            return (
              <li className={css.item} key={item} onClick={chooseFunction}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default ModalWindow;
