// src/features/passes/OrderPage.tsx
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { api } from '../api';
import CompletedClientcardPassCard from '../components/ComplitedClientcardPassCard';
import { ClientCardDetails } from '../api/Api';
import { useParams } from 'react-router-dom';
import { BreadCrumbs } from '../components/BreadCrumbs';
import { ROUTE_LABELS, ROUTES } from '../Routes';
import PassNav from '../components/passes_nav';

const ComplitedClientcardPage: React.FC = () => {
    const [pageData, setPageDdata] = useState<ClientCardDetails | undefined>(undefined);

    const { id } = useParams(); // ид страницы, пример: "/albums/12"
  
    useEffect(() => {
  const fetchData = async () => {
        const { request } = await api.clientCards.clientCardsRead(String(id));
        if (request.status === 200) {
          setPageDdata(JSON.parse(request.response))
          console.log("COMPLETED_CLIETNCARD")
          console.log(pageData)
        }
    };
  
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
        <CompletedClientcardPassCard key={pass.id} pass={pass} />
      ))}
    </Container>
  );
};

export default ComplitedClientcardPage;
