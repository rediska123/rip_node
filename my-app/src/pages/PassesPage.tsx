import { FC, useState, useEffect} from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { PassesResult, getPassesByPrice } from '../modules/PassesAPI'
import InputField from '../components/InputField'
import PassCard from '../components/PassCard'
import { ROUTE_LABELS, ROUTES } from '../Routes'
import { BreadCrumbs } from '../components/BreadCrumbs'
import { useNavigate, Navigate } from "react-router-dom";
import { PASSES_MOCK } from "../modules/mock";
import PassNav from '../components/passes_nav'


const PassesPage: FC = () => {
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [passes, setPasses] = useState<PassesResult>()

    const navigate = useNavigate();

    const handleSearch = async () =>{
        setLoading(true)
        getPassesByPrice(searchValue)
        .then((response) => setPasses(response))
        .catch(() => { // В случае ошибки используем mock данные, фильтруем по имени
            setPasses(
                PASSES_MOCK
            )})
        setLoading(false)
    }

    const handleCardClick = (id: number) => {
        // клик на карточку, переход на страницу альбома
        navigate(`${ROUTES.PASSES}/${id}`);
      };
    
    useEffect(() => {
        setLoading(true)
        getPassesByPrice(searchValue)
        .then((response) => setPasses(response))
        .catch(() => { // В случае ошибки используем mock данные, фильтруем по имени
            setPasses(
                PASSES_MOCK
            )})
        setLoading(false)
    }, [])

    return (
        <div className={`container ${loading && 'containerLoading'}`}>
            {loading && <div className="loadingBg"><Spinner animation="border"/></div>}

            <PassNav name="OOO  Продажа билетов"/>

            <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.PASSES }]} />

            <InputField
                value={searchValue}
                setValue={(value) => setSearchValue(value)}
                loading={loading}
                onSubmit={handleSearch}
            />

            {!passes ? (<div>
                <h1>К сожалению, пока ничего не найдено :(</h1>
            </div>):(

            <Row xs={4} md={4} className="g-4">
                {passes.passes.map((item, index)=> (
                    <Col key={index}>
                        <PassCard h-100 
                        imageClickHandler={() => handleCardClick(item.id)}
                        {...item} />
                    </Col>
                ))}
            </Row>
            )}
        </div>
    )
}

export default PassesPage