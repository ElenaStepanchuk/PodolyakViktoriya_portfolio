import React, { useState } from 'react';

import layout1 from '../../img/portfolio/secondWork/1ORBKportfolio.png';
import layout2 from '../../img/portfolio/secondWork/2oblozhka.gif';
import layout3 from '../../img/portfolio/secondWork/3zmist.png';
import layout4 from '../../img/portfolio/secondWork/4zagalnui_vud.png';
import layout5 from '../../img/portfolio/secondWork/5.png';
import layout6 from '../../img/portfolio/secondWork/6.png';
import layout7 from '../../img/portfolio/secondWork/7.png';
import layout8 from '../../img/portfolio/secondWork/8.png';
import layout9 from '../../img/portfolio/secondWork/9.png';
import layout10 from '../../img/portfolio/secondWork/10.png';
import layout11 from '../../img/portfolio/secondWork/11.png';
import layout12 from '../../img/portfolio/secondWork/12.png';
import layout13 from '../../img/portfolio/secondWork/13.png';
import layout14 from '../../img/portfolio/secondWork/14.png';
import layout15 from '../../img/portfolio/secondWork/15.png';
import layout16 from '../../img/portfolio/secondWork/16.png';
import layout17 from '../../img/portfolio/secondWork/17.png';
import layout18 from '../../img/portfolio/secondWork/18.png';
import layout19 from '../../img/portfolio/secondWork/19.png';
import layout20 from '../../img/portfolio/secondWork/20.png';
import layout21 from '../../img/portfolio/secondWork/21.png';
import layout22 from '../../img/portfolio/secondWork/22.png';
import layout23 from '../../img/portfolio/secondWork/23.png';
import layout24 from '../../img/portfolio/secondWork/24.png';
import layout25 from '../../img/portfolio/secondWork/25.png';
import layout26 from '../../img/portfolio/secondWork/26.png';
import layout27 from '../../img/portfolio/secondWork/27.png';
import layout28 from '../../img/portfolio/secondWork/28.png';
import layout29 from '../../img/portfolio/secondWork/29.png';

import css from './works2Component.module.css';

import { ButtonClose, ButtonLeft, ButtonRight } from 'components';

const Works2Component = () => {
  const imagesArray = [
    layout1,
    layout2,
    layout3,
    layout4,
    layout5,
    layout6,
    layout7,
    layout8,
    layout9,
    layout10,
    layout11,
    layout12,
    layout13,
    layout14,
    layout15,
    layout16,
    layout17,
    layout18,
    layout19,
    layout20,
    layout21,
    layout22,
    layout23,
    layout24,
    layout25,
    layout26,
    layout27,
    layout28,
    layout29,
  ];
  const titleArray = [
    'layout1',
    'layout2',
    'layout3',
    'layout4',
    'layout5',
    'layout6',
    'layout7',
    'layout8',
    'layout9',
    'layout10',
    'layout11',
    'layout12',
    'layout13',
    'layout14',
    'layout15',
    'layout16',
    'layout17',
    'layout18',
    'layout19',
    'layout20',
    'layout21',
    'layout22',
    'layout23',
    'layout24',
    'layout25',
    'layout26',
    'layout27',
    'layout28',
    'layout29',
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
      return;
    }
    setStateImg(imagesArray[0]);
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
export default Works2Component;
