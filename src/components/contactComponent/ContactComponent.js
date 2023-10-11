import css from './contactComponent.module.css';
import { useState, useEffect } from 'react';

import LocalizedStrings from 'react-localization';

import Form from 'components/form/Form';
import SelectLenguage from 'components/selectLenguage';

const ContactComponent = () => {
  let translate = new LocalizedStrings({
    UA: {
      title: 'ЗВ`ЯЖІТЬСЯ ЗІ МНОЮ',
      text: 'Мене цікавлять можливості працевлаштування або великі проекти. Також, якщо у вас виникнуть інші питання, зв`яжіться зі мною за номером телефону +380931380857 або за допомогою форми на цій сторінці. Я буду рада допомогти.',
    },
    EN: {
      title: 'CONTACT ME',
      text: 'I am interested in employment opportunities or large projects. Also, if you have any other questions, please contact me by number +380931380857 or by the form on this page. I will be happy to help you.',
    },
  });

  const [state, setState] = useState('UA');

  useEffect(() => {
    let leng = localStorage.getItem('language');
    if (leng !== null) {
      setState(leng);
    }
  }, [state]);

  translate.setLanguage(state);

  return (
    <div className={css.container}>
      <SelectLenguage top={'170px'} right={'270px'} />
      <div className={css.backdrop}>
        <div className={css.section}>
          <div className={css.contacts_container}>
            <p className={css.text}> {translate.title}</p>
            <p className={css.text1}>{translate.text}</p>
          </div>
        </div>
        <div className={css.section}>
          <div className={css.form_container}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactComponent;
