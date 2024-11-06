
import { FC, useEffect, useState } from "react";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../Routes";
import { useParams } from "react-router-dom";
import { Pass, getPassById } from "../modules/PassesAPI";
import { Col, Row, Spinner, Image } from "react-bootstrap";
import defaultImage from "../bus.png";
import PassNav from "../components/passes_nav";

export const PassPage: FC = () => {
  const [pageData, setPageDdata] = useState<Pass>();

  const { id } = useParams(); // ид страницы, пример: "/albums/12"

  useEffect(() => {
    if (!id) return;
    getPassById(id)
      .then((response) => setPageDdata(response));
  }, [id]);

  return (
    <div>
      
      {pageData ? ( // проверка на наличие данных, иначе загрузка
        <div className="container">
            
          <PassNav name="OOO  Продажа билетов"/>
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