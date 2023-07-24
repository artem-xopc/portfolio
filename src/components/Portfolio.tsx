import { FC } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import styles from './Portfolio.module.css';
import projImg1 from '../assets/images/portfolio/project-img1.png';
import projImg2 from '../assets/images/portfolio/project-img2.png';
import projImg3 from '../assets/images/portfolio/project-img3.png';
import { ProjectCard } from './PorjectCard';

const Portfolio = () => {
  const projects = [
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
  return (
    <section className={styles.project} id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className={styles.nav_pills} id="pills-tab">
                  <Nav.Item className={styles.nav_item}>
                    <Nav.Link className={styles.nav_link} eventKey="first">
                      Business
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={styles.nav_item}>
                    <Nav.Link className={styles.nav_link} eventKey="second">
                      Tab 2
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={styles.nav_item}>
                    <Nav.Link className={styles.nav_link} eventKey="third">
                      Tab 3
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane className={styles.tab_first} eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane className={styles.tab_second} eventKey="second">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod
                      neque provident velit, rem explicabo excepturi id illo molestiae blanditiis,
                      eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane className={styles.tab_third} eventKey="third">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod
                      neque provident velit, rem explicabo excepturi id illo molestiae blanditiis,
                      eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
