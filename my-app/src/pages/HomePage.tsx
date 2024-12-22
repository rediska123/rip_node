import { FC } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import PassNav from "../components/passes_nav";
import './HomePage.css';
import bus_background from './bus_background.png';
import metro_background from './metro_background.png';
import mcd_background from './mcd_background.png';

export const HomePage: FC = () => {
  return (
    
    <div className="homepage-wrapper">
      <PassNav />
      <Carousel controls={false}
        indicators={false}
        interval={10000} // Интервал в миллисекундах (10 секунд)
        wrap={true} // Включает циклическое проигрывание
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
        className="homepage-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bus_background}
            alt="First slide"
          />
          <Carousel.Caption>
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
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={metro_background}
            alt="Second slide"
          />
          <Carousel.Caption>
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
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mcd_background}
            alt="Third slide"
          />
          <Carousel.Caption>
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
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
};
