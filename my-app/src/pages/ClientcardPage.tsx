// src/features/passes/OrderPage.tsx
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { api } from '../api';
import ClientcardPassCard from '../components/ClientcardPassCard';
import { ClientCardDetails } from '../api/Api';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { ROUTE_LABELS, ROUTES } from '../Routes';
import PassNav from '../components/passes_nav';
import { useDispatch, useSelector } from 'react-redux';
import { clearClientcard, setclientcard } from '../slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { clear, setName, setPhone } from '../slices/ClientcardSlice';

const CurrentClientcardPage: React.FC = () => {
    const [pageData, setPageDdata] = useState<ClientCardDetails | undefined>(undefined);
    const dispatch = useDispatch()
    const id = useSelector((state: any) => state.auth.clientcard_id);
    console.log("ID", id)
    const name = useSelector((state: any) => state.clientcard.name);
    const phone = useSelector((state: any) => state.clientcard.phone);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const { request } = await api.clientCards.clientCardsUpdate(id,
            {
                name: name,
                phone: phone
            });
        if (request.status === 200) {
            fetchData();
            SubmitProcurement();
        }
    }

    const SubmitProcurement = async () => {
        const { request } = await api.clientCards.clientCardsSubmitCreate(id);
        if (request.status === 200) {
            dispatch(clearClientcard());
            dispatch(clear());
            navigate(`${ROUTES.CLIENTCARDS}`);
        }
    }

    const handleAddClick = async (id: string) => {
        const { request } = await api.clientCardPass.clientCardPassUpdate(id, { amount: 1 });
        if (request.status === 200) {
            fetchData();
        }
    };

    const handleDecClick = async (id: string) => {
        const { request } = await api.clientCardPass.clientCardPassUpdate(id, { amount: -1 });
        if (request.status === 200) {
            fetchData();
        }
    };

    const fetchData = async () => {
        const { request } = await api.clientCards.clientCardsRead(id);
        if (request.status === 200) {
            setPageDdata(JSON.parse(request.response))
            console.log("CURRENT_CLIETNCARD")
            console.log(pageData)
        }
        const passesResponse = await api.passes.passesList();
        if (passesResponse.request.status === 200) {
            dispatch(setclientcard(JSON.parse(passesResponse.request.response)));
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (pageData?.passes?.length <= 0) {
            navigate(`${ROUTES.PASSES}`)
        }
    }, [])

    return (
        <Container>
            <PassNav />
            <BreadCrumbs
                crumbs={[
                    { label: ROUTE_LABELS.CLIENTCARDS, path: ROUTES.CLIENTCARDS },
                    { label: pageData?.name || "Проездные" },
                ]}
            />
            <h2>Конструктор абонемента</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => dispatch(setName(e.target.value))}
                    />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control
                        type="text"
                        value={phone}
                        onChange={(e) => dispatch(setPhone(e.target.value))}
                    />
                </Form.Group>

                {pageData?.passes && pageData.passes.map((pass: any) => (
                    <ClientcardPassCard key={pass.id} pass={pass} handleIncrease={() => handleAddClick(pass.id)} handleDecrease={() => handleDecClick(pass.id)} />
                ))}
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default CurrentClientcardPage;
