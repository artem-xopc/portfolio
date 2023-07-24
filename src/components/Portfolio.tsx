import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <Container>
      <Row>
        <Col size={12}>Колонка 1</Col>
        <Col>Колонка 2</Col>
        <Col>Колонка 3</Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
