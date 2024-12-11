import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import defaultImage from "../bus.png";   
import { ClientCardPass } from '../api/Api';

interface Props {
  pass: ClientCardPass;
}

const CompletedClientcardPassCard: React.FC<Props> = ({ pass }) => {
console.log(pass)
  return (
    <Card style={{ marginBottom: '20px' }}>
      <Card.Body>
        <Row>
          <Col md={4}>
            <Image
              src={pass.pass_image || defaultImage}
              alt="Картинка"
              style={{ width: '100%' }}
            />
          </Col>
          <Col md={4}>
            <h2>{pass.pass_name}</h2>
            <p>{pass.pass_description}</p>
            <p>{pass.pass_price} Р</p>
          </Col>
          <Col md={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <span style={{ margin: '0 10px' }}>{pass.amount} ШТ.</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CompletedClientcardPassCard;
