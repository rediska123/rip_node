import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ROUTES } from "../Routes";
import PassNav from "../components/passes_nav";

export const HomePage: FC = () => {
  return (
    <Container>
      <PassNav/>
      <Row>
        <Col md={6}>
          <h1>ООО Продажа билетов</h1>
          <p>
            Добро пожаловать в ООО Продажа билетов! Здесь вы можете купить абонемент на транспорт.
          </p>
          <Link to={ROUTES.PASSES}>
            <Button variant="primary">Просмотреть абонементы</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};