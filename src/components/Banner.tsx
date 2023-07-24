import React, { HTMLAttributes } from 'react';
import styles from './Banner.module.css';
import ava from '../assets/images/avatars/1_1.jpg';

const Banner = () => {
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [text, setText] = React.useState('');
  const [delta, setDelta] = React.useState(300 - Math.random() * 100);
  const [index, setIndex] = React.useState(1);
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
  const period = 2000;

  React.useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className={styles.banner} id="home">
      <div className={styles.box_banner}>
        <div className={styles.tagline_wrapper}>
          <span className={styles.tagline}>Здравствуйте!</span>
          <h1>
            {`Меня зовут Артём и я: `}
            <span
              className={styles.txt_rotate}
              data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
              style={{ marginTop: '5px' }}
            >
              <span className={styles.wrap}>{text}</span>
            </span>
          </h1>
          <h1></h1>
        </div>
        <div className={styles.about}>
          <p>
            Разработкой web приложений занимаюсь с 2021 года. За это время работал с такими
            технологиями и языками программирования как: JavaScript, TypeScript, React.js, Next.js,
            Redux (и Redux-toolkit), router-dom, Node,js, Nest.js, express.js и другие. Моя цель как
            разработчика – это постоянное развитие профессиональных качеств, приобретение новых
            знаний и навыков в web разработке. Также занимаюсь фитнесом для поддержания физического
            здоровья. Ссылка на мой GitHub:{' '}
            <a href="https://github.com/artem-xopc" target="_blank" rel="noreferrer">
              Перейти в профиль
            </a>
            .
          </p>
          {/* <p>Основная информация:</p>
          <p>JavaScript программист</p>
          <p>Возраст: 22 года</p>
          <p>Пол: мужской</p>
          <p>Страна проживания: Россия</p>
          <p>Интересуемая занятость: полная</p> */}
        </div>
      </div>
      <div className={styles.avatar}>
        <img src={ava} alt="Изображение моего лица" />
      </div>
    </section>
  );
};

export default Banner;
