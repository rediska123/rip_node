import { FC, useState, useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import InputField from '../components/InputField'
import PassCard from '../components/PassCard'
import { ROUTE_LABELS, ROUTES } from '../Routes'
import { BreadCrumbs } from '../components/BreadCrumbs'
import { useNavigate } from "react-router-dom";
import PassNav from '../components/passes_nav'
import { useDispatch, useSelector } from 'react-redux';
import { setPasses, setSearchValue } from '../slices/PassesSlice';
import { api } from '../api'
import { setclientcard } from '../slices/AuthSlice'
import { Pass } from '../api/Api'

const PassesPage: FC = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const searchValue = useSelector((state: any) => state.passes.searchValue);
    const passes = useSelector((state: any) => state.passes.passes);
    const navigate = useNavigate();
    const current_user = useSelector((state: any) => state.auth);



    const handleSearch = async () => {
        setLoading(true);
        const fetchData = async () => {
            const { request } = await api.passes.passesList();
            if (request.status === 200) {
                dispatch(setPasses(JSON.parse(request.response)));
                console.log("PASSES")
                console.log(passes)
            }
        };

        fetchData();
        setLoading(false);
    };

    const handleCardClick = (id: number) => {
        // клик на карточку, переход на страницу оборудования
        navigate(`${ROUTES.PASSES}/${id}`);
    };

    const handleCardAddClick = async (id: number) => {
        const { request } = await api.passes.passesAddCreate(String(id), {
            "amount": 1
        });
        if (request.status === 200) {
            const { request } = await api.passes.passesList();
            if (request.status === 200) {
                dispatch(setclientcard(JSON.parse(request.response)));
            console.log("USER")
            console.log(current_user)
            }
        }
    };

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const { request } = await api.passes.passesList();
            if (request.status === 200) {
                dispatch(setPasses(JSON.parse(request.response)));
                console.log("PASSES")
                console.log(passes)
            }
        };

        fetchData();
        setLoading(false);
    }, []);

    return (
        <div className={` ${loading && 'containerLoading'}`}>
            {loading && <div className="loadingBg"><Spinner animation="border" /></div>}
            <div className="container">
                <PassNav/>

                <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.PASSES }]} />

                <div className="card pass-card mb-4">
                    <InputField
                        value={searchValue}
                        setValue={(value) => dispatch(setSearchValue(value))}
                        loading={loading}
                        onSubmit={handleSearch}
                    />
                </div>

                {!passes?.passes ? (<div>
                    <h1>К сожалению, пока ничего не найдено</h1>
                </div>) : (

                    <Row xs={1} sm={2} md={3} lg={3} className="g-3">
                        {passes.passes.map((item: Pass, index: number) => (
                            <Col key={index}>
                                <PassCard
                                    imageClickHandler={() => handleCardClick(item.id || 1)}
                                    addClickHandler={() => handleCardAddClick(item.id || 1)}
                                    pass={item} />
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </div>
    )
}

export default PassesPage