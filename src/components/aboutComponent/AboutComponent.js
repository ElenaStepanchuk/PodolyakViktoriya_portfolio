import css from './aboutComponent.module.css';
// import Backdrop from 'components/backdrop/Backdrop';
import SelectLenguage from 'components/selectLenguage';

import SimpleImageSlider from 'react-simple-image-slider';

import { useState, useEffect } from 'react';
import LocalizedStrings from 'react-localization';

import myPhoto1 from '../../img/about/0.jpeg';
import myPhoto2 from '../../img/about/1.jpeg';
import myPhoto3 from '../../img/about/2.jpeg';
import myPhoto4 from '../../img/about/3.jpeg';

import myPhoto5 from '../../img/about/6.jpeg';
import myPhoto6 from '../../img/about/7.jpeg';
import myPhoto7 from '../../img/about/8.jpeg';

const imagesLeft = [
  { url: myPhoto1, title: 'me 1' },
  { url: myPhoto2, title: 'me 2' },
  { url: myPhoto3, title: 'me 3' },
  { url: myPhoto4, title: 'me 4' },
];

const imagesRight = [
  { url: myPhoto5, title: 'me 1' },
  { url: myPhoto6, title: 'me 2' },
  { url: myPhoto7, title: 'me 3' },
];

const AboutComponent = () => {
  const arrayEducationSkills = [
    'ArhiCad',
    'Avtocad',
    'Photoshop',
    // '3DMax',
  ];

  let translate = new LocalizedStrings({
    UA: {
      about:
        'Вітаю, я Вікторія і зараз трішечки про себе розповім. По життю дуже активна і дружелюбна. Багато ходжу по виставкам, музеям, художнім майстер-класам.',
      about1: 'Такoж я:',
      about2: 'Дуже сильно люблю тваринок, особливо котиків.',
      about3:
        'Архітектура почала цікавити давненько, з дитинства часто будувала будинки з цегли, коробок, гілляк, глини. В коледжі ми робили макети по будівлях.',
      about4: 'Вмію працювати в таких програмах:',
      about5: 'Також вмію креслити від руки :)',
      about6:
        'Багато досвіду по малюванню, малювала на замовлення. Малюю на полотні, на аркушах, на одязі.',
      about7: 'Освіта:',
    },
    EN: {
      about:
        'Hello, I`m Victoria and now I`ll tell you a little about myself. Very active and friendly in life. I often go to exhibitions, museums, art workshops.',
      about1: 'I also:',
      about2: 'I love animals very much, especially cats.',
      about3:
        'I became interested in architecture a long time ago, since childhood I often built houses from bricks, boxes, twigs, and clay. In college, we made models of buildings.',
      about4: 'I can work in the following programs:',
      about5: 'I can also draw by hand :)',
      about6:
        'Lots of drawing experience, painted to order. I paint on canvas, on sheets, on clothes.',
      about7: 'Education:',
    },
  });

  let translateSkills = new LocalizedStrings({
    UA: {
      item1: 'швидко навчаюсь новому',
      item2: 'пунктуальна',
      item3: 'відповідальна',
      item4: 'комунікабельна (але трохи сором’язлива)',
      item5: 'працьовита',
      item6: 'активна',
      item7: 'чесна',
      item8: 'харизматична',
      item9: 'добра',
    },
    EN: {
      item1: 'I quickly learn new things',
      item2: 'punctual',
      item3: 'responsible',
      item4: 'communicative (but a little shy)',
      item5: 'hardworking',
      item6: 'active',
      item7: 'honest',
      item8: 'charismatic',
      item9: 'kind',
    },
  });

  let translateEducationDiploms = new LocalizedStrings({
    UA: {
      item1:
        'Київський фаховий коледж будівництви архітерукти та управління, спеціальність - 191 Архітектурне проектування та внутрішній інтер‘єр',
      item2: 'Київська дитяча школа мистецтв №3',
    },
    EN: {
      item1:
        'Kyiv Vocational College of Construction, Architecture and Management, specialty - 191 Architectural design and interior design',
      item2: 'Київська дитяча школа мистецтв №3',
    },
  });

  const [state, setState] = useState('UA');

  useEffect(() => {
    let leng = localStorage.getItem('language');
    setState(leng);
  }, [state]);

  translate.setLanguage(state);
  translateSkills.setLanguage(state);
  translateEducationDiploms.setLanguage(state);

  let arraySoftSkills = [
    translateSkills.item1,
    translateSkills.item2,
    translateSkills.item3,
    translateSkills.item4,
    translateSkills.item5,
    translateSkills.item6,
    translateSkills.item7,
    translateSkills.item8,
    translateSkills.item9,
  ];

  let arrayEducationDiploms = [
    translateEducationDiploms.item1,
    translateEducationDiploms.item2,
  ];

  return (
    <div>
      <div className={css.container}>
        <div className={css.backdrop}>
          <div className={css.container1_about}>
            <p className={css.about_text}>{translate.about}</p>
            <p className={css.about_text}>{translate.about1}</p>
            <ul>
              {arraySoftSkills.map(item => {
                return (
                  <li className={css.about_text1} key={item}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <p className={css.about_text}>{translate.about2}</p>
            <div className={css.container_img_left}>
              <SimpleImageSlider
                style={{ margin: 'auto', display: 'flex', width: '100vw' }}
                width={250}
                height={330}
                images={imagesLeft}
                showBullets={true}
                loop={true}
                autoPlay={true}
                slideDuration={2}
                showNavs={true}
                navMargin={-10}
              />
            </div>
          </div>
          <div className={css.container2_about}>
            <SelectLenguage top={'-10px'} right={'0'} />
            <div className={css.container_img_right}>
              <SimpleImageSlider
                style={{ margin: 'auto', display: 'flex', width: '100vw' }}
                width={250}
                height={330}
                images={imagesRight}
                showBullets={true}
                loop={true}
                autoPlay={true}
                slideDuration={2}
                showNavs={true}
                navMargin={-10}
              />
            </div>
            <p className={css.about_text}>{translate.about3}</p>
            <p className={css.about_text}>{translate.about4}</p>
            <ul>
              {arrayEducationSkills.map(item => {
                return (
                  <li className={css.about_text1} key={item}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <p className={css.about_text}>{translate.about5}</p>
            <p className={css.about_text}>{translate.about6}</p>
            <h3 className={css.about_text}>{translate.about7}</h3>
            <ul>
              {arrayEducationDiploms.map(item => {
                return (
                  <li className={css.about_text1} key={item}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutComponent;
