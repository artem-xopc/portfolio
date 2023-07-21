import { FC } from "react"
import { Container, Row, Col } from "react-bootstrap";

const Portfolio: FC = () => {
    return (
        <Container>
            <Row>
                <Col>Колонка 1</Col>
                <Col>Колонка 2</Col>
                <Col>Колонка 3</Col>
            </Row>
        </Container>
    )
}

export default Portfolio;