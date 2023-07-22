import { FC } from "react"
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner";

const Main: FC = () => {
    return (
        <div>
            <section>
                <Banner dataPeriod='1000' />
            </section>
        </div>
    )
}

export default Main;