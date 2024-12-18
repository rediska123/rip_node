import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PassNav from "../components/passes_nav";
import './HomePage.css';

export const HomePage: FC = () => {
  return (
    <div>
      <PassNav/>
      <div className="homepage-background">
        <Container className="homepage-content">
          <Row>
            <Col md={6} className="homepage-text">
              <h1>Добро пожаловать!</h1>
              <p>
                В ООО Продажа билетов вы можете купить абонемент на транспорт.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};