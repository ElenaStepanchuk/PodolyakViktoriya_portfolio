import css from './aboutComponent.module.css';
// import Backdrop from 'components/backdrop/Backdrop';
import SelectLenguage from 'components/selectLenguage';

import SimpleImageSlider from 'react-simple-image-slider';

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
  const arraySoftSkills = [
    // 'швидко навчаюсь новому',
    // 'пунктуальна',
    // 'відповідальна',
    // 'комунікабельна (але трішки сором‘язлива)',
    // 'працьовита',
    // 'активна',
    // 'чесна',
    // 'харизматична',
    // 'добра',
    'I quickly learn new things',
    'punctual',
    'responsible',
    'communicative (but a little shy)',
    'hardworking',
    'active',
    'honest',
    'charismatic',
    'kind',
  ];
  const arrayEducationSkills = [
    'ArhiCad',
    'Avtocad(базовий)',
    'Photoshop',
    // '3DMax',
  ];
  const arrayEducationDiploms = [
    // 'Київський фаховий коледж будівництви архітерукти та управління, спеціальність - 191 Архітектурне проектування та внутрішній інтер‘єр',
    // 'Київська дитяча школа мистецтв №3',
    'Kyiv Vocational College of Construction, Architecture and Management, specialty - 191 Architectural design and interior design',
    "Kyiv Children's School of Arts No. 3",
  ];
  return (
    <div>
      <div className={css.container}>
        <div className={css.backdrop}>
          <div className={css.container1_about}>
            {/* <h2 className={css.about_text}>
            Вітаю, я Вікторія і зараз трішечки про себе розповім. По життю дуже
            активна і дружелюбна. Багато ходжу по виставкам, музеям, художнім
            майстер-класам.
          </h2> */}
            <p className={css.about_text}>
              Greetings, I'm Victoria and now I'll tell you a little about
              myself. Very active and friendly in life. I often go to
              exhibitions, museums, art workshops.
            </p>
            {/* <h3 className={css.about_text}>Такoж я:</h3> */}
            <p className={css.about_text}>I also:</p>
            <ul>
              {arraySoftSkills.map(item => {
                return (
                  <li className={css.about_text1} key={item}>
                    {item}
                  </li>
                );
              })}
            </ul>
            {/* <p className={css.about_text}>
            Дуже сильно люблю тваринок, особливо котиків.
          </p> */}
            <p className={css.about_text}>
              I love animals very much, especially cats.
            </p>
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
            {/* <p className={css.about_text}>
            Архітектура почала цікавити давненько, з дитинства часто будувала
            будинки з цегли, коробок, гілляк, глини. В коледжі ми робили макети
            по будівлях.
          </p> */}
            <p className={css.about_text}>
              I became interested in architecture a long time ago, since
              childhood I often built houses from bricks, boxes, twigs, and
              clay. In college, we made models of buildings.
            </p>
            {/* <p className={css.about_text}>Вмію працювати в таких програмах:</p> */}
            <p className={css.about_text}>
              I can work in the following programs:
            </p>
            <ul>
              {arrayEducationSkills.map(item => {
                return (
                  <li className={css.about_text1} key={item}>
                    {item}
                  </li>
                );
              })}
            </ul>
            {/* <p className={css.about_text}>Також вмію креслити від руки :)</p> */}
            <p className={css.about_text}>I can also draw by hand :)</p>
            {/* <p className={css.about_text}>
            Багато досвіду по малюванню, малювала на замовлення. Малюю на
            полотні, на аркушах, на одязі.
          </p> */}
            <p className={css.about_text}>
              Lots of drawing experience, painted to order. I paint on canvas,
              on sheets, on clothes.
            </p>
            {/* <h3 className={css.about_text}>Освіта:</h3> */}
            <h3 className={css.about_text}>Education:</h3>
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
