import React from 'react';

import work1 from '../../img/portfolio/firstWork/houseWidthMoreFlors.png';

import css from './works1Component.module.css';

import { ButtonClose } from 'components';

const Works1Component = () => {
  return (
    <>
      <img className={css.image} src={work1} alt="first work" />
      <ButtonClose />
    </>
  );
};
export default Works1Component;
