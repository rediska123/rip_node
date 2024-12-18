// src/features/orders/OrdersList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Container, Button, Form} from 'react-bootstrap';
import { ClientCard } from '../api/Api';
import { api } from '../api';
import { setCards, setEndDate, setStartDate, setStatus } from '../slices/ClientcardsSlice';
import { ROUTE_LABELS, ROUTES } from '../Routes';
import { BreadCrumbs } from '../components/BreadCrumbs';
import PassNav from '../components/passes_nav';

const ClientcardsPage: React.FC = () => {
  const clientcards = useSelector((state: any) => state.clientcards.clientcards);
  const start_date = useSelector((state: any) => state.clientcards.date_start);
  const end_date = useSelector((state: any) => state.clientcards.date_end);
  const status = useSelector((state: any) => state.clientcards.status);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchData = async () => {
          const { request } = await api.clientCards.clientCardsList();
          if (request.status === 200) {
            dispatch(setCards(JSON.parse(request.response)));
            console.log("CLIENT CARDS")
            console.log(clientcards)
          }
      };
  
      fetchData();
  }, []);

  const handleSearch = async () => {
    console.log(status, start_date, end_date)
    const { request } = await api.clientCards.clientCardsList({
        start_date: start_date,
        end_date: end_date,
        status: parseInt(status, 10)
    });
    if (request.status === 200) {
        const data = JSON.parse(request.response);
        console.log('Filtered data:', data);
        dispatch(setCards(data));
    } else {
        console.error('Failed to fetch filtered data');
    }
};

  return (
    <Container>
        <PassNav/>
        <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.CLIENTCARDS }]} />
      <h2>Список абонементов</h2>
      <Form>
                <Form.Group controlId="dateStart">
                    <Form.Label>Начало даты</Form.Label>
                    <Form.Control
                        type="text"
                        value={start_date || ''}
                        onChange={(e) => dispatch(setStartDate(e.target.value))}
                    />
                </Form.Group>
                <Form.Group controlId="dateEnd">
                    <Form.Label>Конец даты</Form.Label>
                    <Form.Control
                        type="text"
                        value={end_date || ''}
                        onChange={(e) => dispatch(setEndDate(e.target.value))}
                    />
                </Form.Group>
                <Form.Group controlId="status">
                    <Form.Label>Статус заказа</Form.Label>
                    <Form.Control
                        type="text"
                        value={status || ''}
                        onChange={(e) => dispatch(setStatus(e.target.value))}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSearch}>
                    Поиск
                </Button>
            </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Дата принятия</th>
            <th>Дата создания</th>
            <th>Статус</th>
            <th>Номер чека</th>
            <th>Пользователь</th>
            <th>Модератор</th>
          </tr>
        </thead>
        <tbody>
          {clientcards.map((order: ClientCard) => (
            <tr onClick={() => {}}>
              <td><Link to={`${ROUTES.CLIENTCARDS}/${order.id}`} className='btn btn-primary'>Смотреть</Link></td>
              <td>{order.name}</td>
              <td>{order.phone}</td>
              <td>{order.accepted_date}</td>
              <td>{order.submited_date}</td>
              <td>{order.status}</td>
              <td>{order.payment_number}</td>
              <td>{order.username}</td>
              <td>{order.moderator}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ClientcardsPage;
