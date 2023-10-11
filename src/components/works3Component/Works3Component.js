import React, { useState } from 'react';

import layout1 from '../../img/portfolio/thirdWork/1title.png';
import layout2 from '../../img/portfolio/thirdWork/2annotation.png';
import layout3 from '../../img/portfolio/thirdWork/3kollage.png';
import layout4 from '../../img/portfolio/thirdWork/4obmirnui.png';
import layout5 from '../../img/portfolio/thirdWork/5demontaj.png';
import layout6 from '../../img/portfolio/thirdWork/6montaj.png';
import layout7 from '../../img/portfolio/thirdWork/7mebli.png';
import layout8 from '../../img/portfolio/thirdWork/8electroobladnannya.png';
import layout9 from '../../img/portfolio/thirdWork/9osvitlennya.png';
import layout10 from '../../img/portfolio/thirdWork/10ceiling.png';
import layout11 from '../../img/portfolio/thirdWork/11floor.png';
import layout12 from '../../img/portfolio/thirdWork/12table1.png';
import layout13 from '../../img/portfolio/thirdWork/13table2.png';
import layout14 from '../../img/portfolio/thirdWork/14table3.png';
import layout15 from '../../img/portfolio/thirdWork/15vizualization.png';

import css from './works3Component.module.css';

import { ButtonClose, ButtonLeft, ButtonRight } from 'components';

const Works3Component = () => {
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
export default Works3Component;
