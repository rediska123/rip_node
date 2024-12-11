// src/features/auth/Login.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../slices/AuthSlice';
import { Button, Container, Form } from 'react-bootstrap';
import { User } from '../api/Api';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import { ROUTE_LABELS, ROUTES } from '../Routes';
import { BreadCrumbs } from '../components/BreadCrumbs';
import PassNav from '../components/passes_nav';

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const current_user = useSelector((state: any) => state.auth);
  const [password, setPassword] = useState('');
  const [last_name, setLastName] = useState(current_user.user.last_name);
  const [first_name, setFirstName] = useState(current_user.user.first_name);

  const handleEdit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { request } = await api.userEdit.userEditUpdate({
        first_name: first_name,
        last_name: last_name,
        password: password,
    })
    if (request.status == 200) {
        dispatch(setUser(JSON.parse(request.response)))
    }
  };

  return (
    <Container>
        <PassNav/>
        <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.CLIENTCARDS }]} />
      <h2>{current_user.user.username}</h2>
      <Form>
        <Form.Group controlId="formFirstName">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Введите имя"
          />
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Введите фамилию"
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите новый пароль"
          />
        </Form.Group>
        
        <Button variant="primary" onClick={handleEdit}>
          Редактировать
        </Button>
      </Form>
    </Container>
  );
};

export default ProfilePage;
