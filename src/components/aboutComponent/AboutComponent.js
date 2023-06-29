import css from './aboutComponent.module.css';
import Backdrop from 'components/backdrop/Backdrop';
import SelectLenguage from 'components/selectLenguage';

import testImg from '../../img/about/sambuca.jpg';

const AboutComponent = () => {
  const arraySoftSkills = [
    'швидко навчаюсь новому',
    'пунктуальна',
    'відповідальна',
    'комунікабельна (але трішки сором‘язлива)',
    'працьовита',
    'активна',
    'чесна',
    'харизматична',
    'добра',
  ];
  const arrayEducationSkills = [
    'ArhiCad',
    'Avtocad(базовий)',
    'Photoshop',
    '3DMax',
  ];
  const arrayEducationDiploms = [
    'Київський фаховий коледж будівництви архітерукти та управління, спеціальність - 191 Архітектурне проектування та внутрішній інтер‘єр',
    'Київська дитяча школа мистецтв №3',
  ];
  return (
    <Backdrop>
      <div className={css.container}>
        <div className={css.container1_about}>
          <h2 className={css.about_text}>
            Вітаю, я Вікторія і зараз трішечки про себе розповім. По життю дуже
            активна і дружелюбна. Багато ходжу по виставкам, музеям, художнім
            майстер-класам.
          </h2>
          <h3 className={css.about_text}>Такoж я:</h3>
          <ul>
            {arraySoftSkills.map(item => {
              return (
                <li className={css.about_text1} key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
          <p className={css.about_text}>
            Дуже сильно люблю тваринок, особливо котиків.
          </p>
          <div className={css.container_img_left}>
            <img src={testImg} alt="test img" />
          </div>
        </div>

        <div className={css.container2_about}>
          <SelectLenguage top={'-10px'} right={'0'} />
          <div className={css.container_img_right}>
            <img src={testImg} alt="test img" />
          </div>
          <p className={css.about_text}>
            Архітектура почала цікавити давненько, з дитинства часто будувала
            будинки з цегли, коробок, гілляк, глини. В коледжі ми робили макети
            по будівлях.
          </p>
          <h3 className={css.about_text}>Вмію працювати в таких програмах:</h3>
          <ul>
            {arrayEducationSkills.map(item => {
              return (
                <li className={css.about_text1} key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
          <p className={css.about_text}>Також вмію креслити від руки :)</p>
          <p className={css.about_text}>
            Багато досвіду по малюванню, малювала на замовлення. Малюю на
            полотні, на аркушах, на одязі.
          </p>
          <h3 className={css.about_text}>Освіта:</h3>
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
    </Backdrop>
  );
};
export default AboutComponent;
