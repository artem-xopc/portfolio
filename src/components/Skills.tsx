import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import styles from './Skills.module.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className={styles.skill} id="skills">
      <Container>
        <Row>
          <Col className={styles.skill_bx}>
            <div className={styles.skill_bx_inside}>
              <h2>Skills</h2>
              <p>
                Опыт работы: 1.5 года. Компания: Yakha Consalting. Должность: Frontend Developer{' '}
                {'(Junior -> Junior+/Middle)'}. За время работы занимался:
              </p>
              <ul>
                <li>
                  разработкой web приложения на React, Redux Toolkit и TypeScript для строительной
                  компании, которое предназначалось для управления строительными бригадами,
                  управления проектами и построением целей сотрудников компании;
                </li>
                <li> разработкой лэндинга косметической компании;</li>
                <li> разработкой пользовательского интерфейса с помощью Tailwind;</li>
                <li> разработкой онлайн чата для связи с клиентами.</li>
              </ul>
              <h3 style={{ marginTop: '10px' }}>Технические навыки</h3>
              <ul>
                <li>
                  <h4>Языки программирования:</h4> TypeScript, JavaScript;
                </li>
              </ul>
              <h4>Технологии и фреймворки:</h4>
              <ul>
                <li>
                  <h4>Для Frontend:</h4> ReactJS, Next.JS, Redux, HTML5, CSS3, SCSS, Bootstrap;
                </li>
                <li>
                  <h4>Для Backend:</h4> NodeJS, Nest.JS, ExpressJS;
                </li>
                <li>
                  <h4>Базы данных и другие:</h4> MongoDB, система контроля версий Git, работа с REST
                  API, работа с Postman;
                </li>
                <li>
                  <h4>IDE:</h4> VSCode.
                </li>
                <li>
                  <h4>Для разработки дизайна использую:</h4> Photoshop, Figma.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
