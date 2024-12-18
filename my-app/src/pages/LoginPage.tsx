// src/features/auth/Login.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, setclientcard, setUser } from '../slices/AuthSlice';
import { Button, Container, Form } from 'react-bootstrap';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import { ROUTE_LABELS, ROUTES } from '../Routes';
import { BreadCrumbs } from '../components/BreadCrumbs';
import PassNav from '../components/passes_nav';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const resultAction = await dispatch(login({ username, password }));
        if (login.fulfilled.match(resultAction)) {
          handleCart();
          navigate(ROUTES.PASSES);
        }
      };

    const handleCart = async () => {
        const { request } = await api.passes.passesList();
            if (request.status === 200) {
                dispatch(setclientcard(JSON.parse(request.response)));
        }
    }

    return (
        <Container>
            <PassNav />
            <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.CLIENTCARDS }]} />
            <h2>Login</h2>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
