import { FC, useState, useEffect} from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { getPassesByPrice, Pass } from '../modules/PassesApi'
import InputField from '../components/InputField' 
import PassCard from '../components/PassCard'
import { ROUTE_LABELS, ROUTES } from '../Routes'
import { BreadCrumbs } from '../components/BreadCrumbs'
import { useNavigate } from "react-router-dom";
import PassNav from '../components/passes_nav'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, setPasses } from '../slices/PassesSlice'; 

const PassesPage: FC = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state: any) => state.passes.searchValue);
    const passes = useSelector((state: any) => state.passes.passes);

    //const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    //const [passes, setPasses] = useState<PassesResult>()

    const [activeSearchValue, setActiveSearchValue] = useState(searchValue)

    const navigate = useNavigate();

    const handleSearch = async () => {
        dispatch(setSearchValue(activeSearchValue))
        setLoading(true)
        getPassesByPrice(searchValue)
        .then((response) => dispatch(setPasses(response)))
        setLoading(false)
    };

    /*
    const handleSearch = async () =>{
        setLoading(true)
        getPassesByPrice(searchValue)
        .then((response) => setPasses(response))
        setLoading(false)
    }
    */

    const handleCardClick = (id: number) => {
        // клик на карточку, переход на страницу альбома
        navigate(`${ROUTES.PASSES}/${id}`);
      };
    
    useEffect(() => {
        setLoading(true)
        getPassesByPrice(searchValue)
        .then((response) => dispatch(setPasses(response)))
        setLoading(false)
    }, [])

    /*
    useEffect(() => {
        setLoading(true)
        getPassesByPrice(searchValue)
        .then((response) => setPasses(response))
        setLoading(false)
    }, [])
    */

    return (
        <div className={`container  ${loading && 'containerLoading'}`}>
            {loading && <div className="loadingBg"><Spinner animation="border"/></div>}

            <PassNav name="OOO  ПродажаБилетов"/>

            <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.PASSES }]} />

            <InputField
                value={activeSearchValue}
                setValue={(value) => setActiveSearchValue(value)}
                loading={loading}
                onSubmit={handleSearch}
            />

            {!passes ? (<div>
                <h1>К сожалению, пока ничего не найдено</h1>
            </div>):(

            <Row xs={1} sm={2} md={3} lg={3} className="g-3">
                {passes.passes.map((item: Pass, index: number)=> (
                    <Col key={index}>
                        <PassCard
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