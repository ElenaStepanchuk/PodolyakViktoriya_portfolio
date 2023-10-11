import css from './form.module.css';
import React, { useState, useRef, useEffect } from 'react';
import LocalizedStrings from 'react-localization';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import emailjs from '@emailjs/browser';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  let translate = new LocalizedStrings({
    UA: {
      name: 'Ваше ім`я',
      email: 'Ваш емейл',
      subject: 'Тема',
      message: 'Повідомлення',
      send: 'Відправити',
      notifySend: 'Ваш лист відправлено!',
      notlifyNotSend:
        'Ваш лист не відправлено, будь-ласка спробуйте знов пізніше!',
      notlifyEnterAllFields: 'Заповніть всі поля у формі!',
    },
    EN: {
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      notifySend: 'Your message sent!',
      notlifyNotSend: 'Message not sent, please try again later!',
      notlifyEnterAllFields: 'Enter all fields in form!',
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

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const sendEmail = event => {
    event.preventDefault();
    if (!name || !email || !subject || !message) {
      return Notify.failure(`${translate.notlifyEnterAllFields}`, {
        width: '200px',
        position: 'center-center',
        distance: '10px',
        opacity: 1,
        borderRadius: '2px',
      });
    } else {
      emailjs
        .sendForm(
          'service_iymsyph',
          'template_fmnxux8',
          form.current,
          'g7-WjxSWoov268bP8'
        )
        .then(
          () => {
            Notify.success(`${translate.notifySend}`);
            console.log('Email send');
            reset();
          },
          () => {
            Notify.failure(`${translate.notlifyNotSend}`);
            throw console.error('Email not send');
          }
        );
    }
  };

  return (
    <>
      <form className={css.form} ref={form} onSubmit={sendEmail}>
        <div className={css.input_wrapper}>
          <input
            className={css.form_input}
            placeholder=" "
            value={name}
            type="text"
            name="name"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="5"
            maxLength="30"
            required
            onChange={handleInputChange}
          ></input>
          <label className={css.form_label}>{translate.name}</label>
        </div>
        <div className={css.input_wrapper}>
          <input
            className={css.form_input}
            placeholder=" "
            value={email}
            type="email"
            name="email"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="5"
            maxLength="30"
            required
            onChange={handleInputChange}
          ></input>
          <label className={css.form_label}>{translate.email}</label>
        </div>
        <div className={css.input_wrapper}>
          <input
            placeholder=" "
            className={css.form_input}
            value={subject}
            type="text"
            name="subject"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="3"
            maxLength="150"
            required
            onChange={handleInputChange}
          ></input>
          <label className={css.form_label}>{translate.subject}</label>
        </div>
        <div className={css.input_wrapper}>
          <textarea
            placeholder=" "
            className={css.form_input_message}
            value={message}
            type="text"
            name="message"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="20"
            maxLength="500"
            required
            onChange={handleInputChange}
          ></textarea>
          <label className={css.form_label}>{translate.message}</label>
        </div>
        <button className={css.form_button} type="submit" onClick={sendEmail}>
          {translate.send}
        </button>
      </form>
    </>
  );
};
export default Form;
