import React, { useState } from 'react';

import layout1 from '../../img/portfolio/myPicture/1.JPG';
import layout2 from '../../img/portfolio/myPicture/2.JPEG';
import layout3 from '../../img/portfolio/myPicture/3.JPG';
import layout4 from '../../img/portfolio/myPicture/4.jpeg';
import layout5 from '../../img/portfolio/myPicture/5.jpeg';
import layout6 from '../../img/portfolio/myPicture/6.JPG';
import layout7 from '../../img/portfolio/myPicture/7.JPEG';

import css from './myPictureComponent.module.css';

import { ButtonClose, ButtonLeft, ButtonRight } from 'components';

const MyPictureComponent = () => {
  const imagesArray = [
    layout1,
    layout2,
    layout3,
    layout4,
    layout5,
    layout6,
    layout7,
  ];
  const titleArray = [
    'layout1',
    'layout2',
    'layout3',
    'layout4',
    'layout5',
    'layout6',
    'layout7',
  ];

  const [stateImg, setStateImg] = useState(imagesArray[0]);
  const [stateTitle, setStateTitle] = useState(titleArray[0]);

  const LeftButton = () => {
    let i = imagesArray.indexOf(stateImg);
    if (i >= 1) {
      i -= 1;
      setStateImg(imagesArray[i]);
      setStateTitle(titleArray[i]);
      return;
    }
    setStateImg(imagesArray[imagesArray.length - 1]);
    setStateTitle(titleArray[imagesArray.length - 1]);
    return;
  };
  const RightButton = () => {
    let i = imagesArray.indexOf(stateImg);
    if (i < imagesArray.length - 1) {
      i += 1;
      setStateImg(imagesArray[i]);
      setStateTitle(titleArray[i]);
      return;
    }
    setStateImg(imagesArray[0]);
    setStateTitle(titleArray[0]);
    return;
  };

  return (
    <>
      <img className={css.image} src={stateImg} alt={stateTitle} />

      <ButtonClose />
      <ButtonLeft onClick={LeftButton} />
      <ButtonRight onClick={RightButton} />
    </>
  );
};
export default MyPictureComponent;
