
import { FC, useEffect, useState } from "react";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../Routes";
import { useParams } from "react-router-dom";
import { Col, Row, Spinner, Image } from "react-bootstrap";
import defaultImage from "../bus.png";
import PassNav from "../components/passes_nav";
import { api } from "../api";
import { Pass } from "../api/Api";

export const PassPage: FC = () => {
  const [pageData, setPageDdata] = useState<Pass>();

  const { id } = useParams(); // ид страницы, пример: "/albums/12"

  useEffect(() => {
const fetchData = async () => {
      const { request } = await api.passes.passesRead(id);
      if (request.status === 200) {
        setPageDdata(JSON.parse(request.response))
        console.log("PASS")
        console.log(pageData)
      }
  };

  fetchData();
}, []);

  return (
    <div>
      
      {pageData ? ( // проверка на наличие данных, иначе загрузка
        <div className="container">
            
          <PassNav/>
          <BreadCrumbs
        crumbs={[
          { label: ROUTE_LABELS.PASSES, path: ROUTES.PASSES },
          { label: pageData?.name || "Абонемент" },
        ]}
      />
          <Row>
          <Col md={6}>
              <Image
                src={pageData.image || defaultImage} // дефолтное изображение, если нет artworkUrl100
                alt="Картинка"
                style={{width: "100%",}}
              />
            </Col>
            <Col md={6}>
              <h2>{pageData.name}</h2>
              <p>
                {pageData.description}
              </p>
              <p>
                <strong>{pageData.price}</strong>
              </p>
            </Col>
            
          </Row>
        </div>
      ) : (
        <div className="album_page_loader_block">{/* загрузка */}
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
};