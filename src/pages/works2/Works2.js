import React from 'react';

import { Works2Component } from 'components';

import css from './works2.module.css';

const Works2 = () => {
  return (
    <div className={css.worksBackdrop}>
      <div className={css.worksContainer}>
        <Works2Component />
      </div>
    </div>
  );
};
export default Works2;
