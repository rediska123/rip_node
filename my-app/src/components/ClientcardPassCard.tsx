import React from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import defaultImage from "../bus.png";
import { ClientCardPass } from '../api/Api';

interface Props {
  pass: ClientCardPass;
  handleDecrease?: () => void;
  handleIncrease?: () => void;
}

const ClientcardPassCard: React.FC<Props> = ({ pass, handleDecrease, handleIncrease }) => {

  return (
    <Card style={{ marginBottom: '20px' }}>
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
            <p><strong>{pass.pass_price}</strong></p>
          </Col>
          <Col md={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="secondary" onClick={handleDecrease}>-</Button>
              <span style={{ margin: '0 10px' }}>{pass.amount}</span>
              <Button variant="secondary" onClick={handleIncrease}>+</Button>
            </div>
          </Col>
        </Row>
    </Card>
  );
};

export default ClientcardPassCard;
