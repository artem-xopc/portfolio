import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import styles from './Portfolio.module.css';
import projImg1 from '../assets/images/portfolio/project-img1.png';
import projImg2 from '../assets/images/portfolio/project-img2.png';
import projImg3 from '../assets/images/portfolio/project-img3.png';
import projImg4 from '../assets/images/portfolio/project-img4.png';
import projImg5 from '../assets/images/portfolio/project-img5.png';
import projImg6 from '../assets/images/portfolio/project-img6.png';
import projImg7 from '../assets/images/portfolio/project-img7.png';
import projImg10 from '../assets/images/portfolio/project-img10.png';
import { ProjectCard } from './PorjectCard';

const Portfolio = () => {
  const [activeItem, setActiveItem] = React.useState('business');
  const b_projects = [
    {
      title: 'Oculus Meta 2',
      description: 'Design & Development',
      imgUrl: projImg1,
      link: 'https://artem-xopc.github.io/oculus-mate-2/',
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
  const o_projects = [
    {
      title: 'Color Palette',
      description: 'Development',
      imgUrl: projImg4,
      link: 'https://artem-xopc.github.io/Change-Color-By-Artem-Xopc/',
    },
    {
      title: 'About my Book',
      description: 'Design & Development',
      imgUrl: projImg5,
      link: 'https://artem-xopc.github.io/about-my-book/',
    },
    {
      title: 'Food Table',
      description: 'Design & Development',
      imgUrl: projImg7,
      link: 'https://artem-xopc.github.io/food-table/',
    },
    {
      title: 'Calculator',
      description: 'Design & Development',
      imgUrl: projImg6,
      link: 'https://artem-xopc.github.io/JScalculator/',
    },
    {
      title: 'Chess',
      description: 'Development',
      imgUrl: projImg10,
      link: 'https://artem-xopc.github.io/chess/',
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
                      <div className={styles.proj_wrapper}>
                        {b_projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </div>
                    </div>
                  )}
                  {activeItem === 'other' && (
                    <div>
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
