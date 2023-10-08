import React, { useState, useEffect } from 'react';

import css from './selectLenguage.module.css';
import ModalWindow from 'components/modalWindow';

const SelectLenguage = ({ top, right }) => {
  const [open, setOpen] = useState(false);
  const [selectText, setSelectText] = useState('UA');
  const lengMenu = ['UA', 'EN'];

  const handleShowModal = () => setOpen(isOpen => !isOpen);

  useEffect(() => {
    const lang = localStorage.getItem('language');
    if (!lang) {
      setSelectText(selectText);
    } else {
      setSelectText(lang);
    }
  }, [selectText]);
  const handleChoose = event => {
    event.preventDefault();
    if (!event.target) return;
    const chooseText = event.target.innerText;
    setOpen(isOpen => !isOpen);
    localStorage.setItem('language', chooseText);
    const lang = localStorage.getItem('language');
    setSelectText(lang);
    window.location.reload();
  };

  return (
    <div
      className={css.button_lang}
      style={{ right: `${right}`, top: `${top}` }}
    >
      <ModalWindow
        text={selectText}
        isModalOpen={open}
        clickFunction={handleShowModal}
        chooseFunction={handleChoose}
        selectList={lengMenu}
      />
    </div>
  );
};

export default SelectLenguage;
