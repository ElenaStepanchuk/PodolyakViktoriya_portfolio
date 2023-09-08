import React from 'react';

import { Works1Component } from 'components';

import css from './works1.module.css';

const Works1 = () => {
  return (
    <div className={css.worksBackdrop}>
      <div className={css.worksContainer}>
        <Works1Component />
      </div>
    </div>
  );
};
export default Works1;
