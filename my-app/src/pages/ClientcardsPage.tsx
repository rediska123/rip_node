// src/features/orders/OrdersList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Container } from 'react-bootstrap';
import { ClientCard } from '../api/Api';
import { api } from '../api';
import { setCards } from '../slices/ClientcardsSlice';
import { ROUTE_LABELS, ROUTES } from '../Routes';
import { BreadCrumbs } from '../components/BreadCrumbs';
import PassNav from '../components/passes_nav';

const ClientcardsPage: React.FC = () => {
  const clientcards = useSelector((state: any) => state.clientcards.clientcards);
  
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

  return (
    <Container>
        <PassNav/>
        <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.CLIENTCARDS }]} />
      <h2>Orders List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Accepted Date</th>
            <th>Created Date</th>
            <th>Status</th>
            <th>Submitted Date</th>
            <th>Username</th>
            <th>Moderator</th>
          </tr>
        </thead>
        <tbody>
          {clientcards.map((order: ClientCard) => (
            <tr onClick={() => {}}>
              <td><Link to={`${ROUTES.CLIENTCARDS}/${order.id}`}>{order.id}</Link></td>
              <td>{order.name}</td>
              <td>{order.phone}</td>
              <td>{order.accepted_date}</td>
              <td>{order.created_date}</td>
              <td>{order.status}</td>
              <td>{order.submited_date}</td>
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
