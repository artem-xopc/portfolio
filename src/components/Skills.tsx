import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skill} id="skills">
      <Container>
        <Row>
          <Col className={styles.skill_bx}>
            <div className={styles.skill_bx_inside}>
              <h2>Навыки</h2>
              <p>
                Опыт работы: >года. Компания: Стартап EdTech «University Schedule». Должность: Frontend Developer.
              </p>
              <p>За время работы в компании занимался:</p>
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
                  <h4>Базы данных и другие:</h4> SQL, MongoDB, система контроля версий Git, работа с REST
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
