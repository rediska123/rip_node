// src/features/passes/OrderPage.tsx
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { api } from '../api';
import CompletedClientcardPassCard from '../components/ComplitedClientcardPassCard';
import { ClientCardDetails } from '../api/Api';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { ROUTE_LABELS, ROUTES } from '../Routes';
import PassNav from '../components/passes_nav';
import { useDispatch, useSelector } from 'react-redux';
import ClientcardPassCard from '../components/ClientcardPassCard';

const CurrentClientcardPage: React.FC = () => {
    const [pageData, setPageDdata] = useState<ClientCardDetails | undefined>(undefined);
    const dispatch = useDispatch()
    const id = useSelector((state: any) => state.auth.clientcard_id);

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
    };

    useEffect(() => {
    fetchData();
}, [])

  return (
    <Container>
        <PassNav/>
        <BreadCrumbs
        crumbs={[
          { label: ROUTE_LABELS.CLIENTCARDS, path: ROUTES.CLIENTCARDS },
          { label: pageData?.name || "Проездные" },
        ]}
      />
      <h2>Order Page</h2>
      <p>Клиент: {pageData?.name}</p>
      <p>Телефон: {pageData?.phone}</p>
      <p>Дата создания: {pageData?.created_date}</p>
      <p>Дата одобрения: {pageData?.submited_date}</p>
      {pageData?.passes && pageData.passes.map((pass: any) => (
        <ClientcardPassCard key={pass.id} pass={pass} handleIncrease={() => handleAddClick(pass.id)} handleDecrease={() => handleDecClick(pass.id)} />
      ))}
    </Container>
  );
};

export default CurrentClientcardPage;
