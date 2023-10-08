import css from './contactComponent.module.css';
import React from 'react';
import Form from 'components/form/Form';
import SelectLenguage from 'components/selectLenguage';

const ContactComponent = () => {
  return (
    <div className={css.container}>
      <SelectLenguage top={'170px'} right={'270px'} />
      <div className={css.backdrop}>
        <div className={css.section}>
          <div className={css.contacts_container}>
            <p className={css.text}>CONTACT ME</p>
            <p className={css.text1}>
              I am interested in employment opportunities or large projects.
              Also, if you have any other questions, please contact me by number
              +380931380857 or by the form on this page. I will be happy to help
              you.
            </p>
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
