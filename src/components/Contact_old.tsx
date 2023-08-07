import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './Contact.module.css';
import keepInTouch from '../assets/images/coder.png';

const Contact = () => {
  const formInitial = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const [formDetails, setFormDetails] = React.useState(formInitial);
  const [buttonText, setButtonText] = React.useState('Отправить');
  const [status, setStatus] = React.useState({});

  const onFormUpdate = (category: any, value: any) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setButtonText('Отправка...');
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText('Отправить');
    let result = await response.json();
    setFormDetails(formInitial);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Сообщение отправлено успешно' });
    } else {
      setStatus({
        success: false,
        message: 'При отправке сообщения произошла ошибка, пожалуйста, повторите попытку позже',
      });
    }
  };

  return (
    <section className={styles.contact}>
      <div>
        <span>
          <img src={keepInTouch} />
        </span>
      </div>
      <div>
        <span>
          <h2>Останемся на связи</h2>
          <form onSubmit={handleSubmit}>
            <Col size={12} sm={6} className="px-1">
              <input
                type="text"
                placeholder="Введите Ваше имя"
                value={formDetails.firstName}
                onChange={(e) => onFormUpdate('firstName', e.target.value)}
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input
                type="text"
                placeholder="Введите Вашу фамилию"
                value={formDetails.lastName}
                onChange={(e) => onFormUpdate('lastName', e.target.value)}
              />
            </Col>
            <Col size={12} sm={6} className="px-1">
              <input
                type="email"
                placeholder="Введите Ваш email"
                value={formDetails.email}
                onChange={(e) => onFormUpdate('email', e.target.value)}
              />
            </Col>
            <Col size={12} className="px-1">
              <textarea
                rows={6}
                placeholder="Введите сообщение"
                value={formDetails.message}
                onChange={(e) => onFormUpdate('message', e.target.value)}
              ></textarea>
              <button type="submit">
                <span>{buttonText}</span>
              </button>
            </Col>
          </form>
        </span>
      </div>
    </section>
  );
};

export default Contact;
