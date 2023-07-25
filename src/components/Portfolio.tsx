import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import styles from './Portfolio.module.css';
import projImg1 from '../assets/images/portfolio/project-img1.png';
import projImg2 from '../assets/images/portfolio/project-img2.png';
import projImg3 from '../assets/images/portfolio/project-img3.png';
import { ProjectCard } from './PorjectCard';

const Portfolio = () => {
  const [activeItem, setActiveItem] = React.useState('business');
  const b_projects = [
    {
      title: 'Oculus Meta 2',
      description: 'Design & Development',
      imgUrl: projImg1,
      link: 'https://github.com/artem-xopc/oculus-mate-2',
    },
    {
      title: 'Music Platform',
      description: 'Design & Development',
      imgUrl: projImg2,
      link: 'https://github.com/artem-xopc',
    },
    {
      title: 'CoinFuse',
      description: 'Design & Development',
      imgUrl: projImg3,
      link: 'https://github.com/artem-xopc',
    },
  ];
  const g_projects = [
    {
      title: 'Game Of Life',
      description: 'Development',
      imgUrl: projImg1,
      link: 'https://github.com/artem-xopc',
    },
    {
      title: 'Tetris',
      description: 'Development',
      imgUrl: projImg2,
      link: 'https://github.com/artem-xopc',
    },
    {
      title: 'Chess',
      description: 'Development',
      imgUrl: projImg3,
      link: 'https://github.com/artem-xopc',
    },
  ];
  const o_projects = [
    {
      title: 'Color Palette',
      description: 'Development',
      imgUrl: projImg1,
      link: 'https://github.com/artem-xopc',
    },
    {
      title: 'About my Book',
      description: 'Design & Development',
      imgUrl: projImg2,
      link: 'https://github.com/artem-xopc',
    },
    {
      title: 'Calculator',
      description: 'Design & Development',
      imgUrl: projImg3,
      link: 'https://github.com/artem-xopc',
    },
    {
      title: 'Stellar Scroll',
      description: 'Design & Development',
      imgUrl: projImg1,
      link: 'https://github.com/artem-xopc',
    },
    {
      title: 'Witcher Parallax',
      description: 'Design & Development',
      imgUrl: projImg2,
      link: 'https://github.com/artem-xopc',
    },
    {
      title: 'Stapwatch',
      description: 'Development',
      imgUrl: projImg3,
      link: 'https://github.com/artem-xopc',
    },
  ];

  const onUpdateActiveItem = (value: string) => {
    setActiveItem(value);
  };
  return (
    <section className={styles.project} id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <div className={styles.portfolio_wrapper}>
              <h2 style={{ marginBottom: '20px' }}>Projects</h2>
              <div>
                <Nav className={styles.nav_pills}>
                  <Nav.Link
                    href={'#portfolio/business'}
                    className={styles.nav_link}
                    onClick={() => onUpdateActiveItem('business')}
                  >
                    Business
                  </Nav.Link>
                  <Nav.Link
                    href={'#portfolio/games'}
                    className={styles.nav_link}
                    onClick={() => onUpdateActiveItem('games')}
                  >
                    Games
                  </Nav.Link>
                  <Nav.Link
                    href={'#portfolio/other'}
                    className={styles.nav_link}
                    onClick={() => onUpdateActiveItem('other')}
                  >
                    Other
                  </Nav.Link>
                </Nav>
                <div>
                  {activeItem === 'business' && (
                    <div>
                      <p>Здесь представлены бизнес-проекты, над которыми я работал</p>
                      <div className={styles.proj_wrapper}>
                        {b_projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </div>
                    </div>
                  )}
                  {activeItem === 'games' && (
                    <div>
                      <p>Здесь представлены проекты-игры, над которыми я работал</p>
                      <div className={styles.proj_wrapper}>
                        {g_projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </div>
                    </div>
                  )}
                  {activeItem === 'other' && (
                    <div>
                      <p>Здесь представлены остальные мои проекты</p>
                      <div className={styles.proj_wrapper}>
                        {o_projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
