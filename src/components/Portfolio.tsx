import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import styles from './Portfolio.module.css';
import projImg1 from '../assets/images/portfolio/project-img1.png';
import projImg2 from '../assets/images/portfolio/project-img2.png';
import projImg3 from '../assets/images/portfolio/project-img3.png';
import { ProjectCard } from './PorjectCard';

const Portfolio = () => {
  const [activeItem, setActiveItem] = React.useState('first');
  const b_projects = [
    {
      title: 'Business StartUp',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business StartUp',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business StartUp',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
  ];
  const g_projects = [
    {
      title: 'Business StartUp',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business StartUp',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business StartUp',
      description: 'Design & Development',
      imgUrl: projImg3,
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
                    href={'#portfolio/1'}
                    className={styles.nav_link}
                    onClick={() => onUpdateActiveItem('first')}
                  >
                    Business
                  </Nav.Link>
                  <Nav.Link
                    href={'#portfolio/2'}
                    className={styles.nav_link}
                    onClick={() => onUpdateActiveItem('second')}
                  >
                    Games
                  </Nav.Link>
                  <Nav.Link
                    href={'#portfolio/3'}
                    className={styles.nav_link}
                    onClick={() => onUpdateActiveItem('third')}
                  >
                    Other
                  </Nav.Link>
                </Nav>
                <div>
                  {activeItem === 'first' ? (
                    <div>
                      <p>Здесь представлены бизнес-проекты, над которыми я работал</p>
                      <div className={styles.proj_wrapper}>
                        {b_projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p>Здесь представлены проекты-игры, над которыми я работал</p>
                      <div className={styles.proj_wrapper}>
                        {g_projects.map((project, index) => (
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
