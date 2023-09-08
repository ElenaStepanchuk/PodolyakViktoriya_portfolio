import React from 'react';

import { Works3Component } from 'components';

import css from './works3.module.css';

const Works3 = () => {
  return (
    <div className={css.worksBackdrop}>
      <div className={css.worksContainer}>
        <Works3Component />
      </div>
    </div>
  );
};
export default Works3;
