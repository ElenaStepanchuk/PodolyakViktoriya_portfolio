import React from 'react';

import { MyPictureComponent } from 'components';

import css from './myPictures.module.css';

const MyPictures = () => {
  return (
    <div className={css.worksBackdrop}>
      <div className={css.worksContainer}>
        <MyPictureComponent />
      </div>
    </div>
  );
};
export default MyPictures;
