import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import defaultImage from "../bus.png";
import "../index.css"
import { Pass } from '../api/Api';
import { useSelector } from 'react-redux';


interface Props {
    pass: Pass
    imageClickHandler: () => void;
    addClickHandler: () => void;
}

const PassCard: FC<Props> = ({ pass, imageClickHandler, addClickHandler }) => {
    const current_user = useSelector((state: any) => state.auth);

    return (
        <Card className="pass-card card h-100">
            <Card.Img className="bd-placeholder-img card-img-top pass-img mx-auto d-block" variant="top" src={pass.image || defaultImage} onClick={imageClickHandler}/>
            <Card.Body>
                <Card.Title>{pass.name}</Card.Title>
                <Card.Text>{pass.description}</Card.Text>
                <p>{pass.price} P</p>
                <div className='my-buttons align-self-end g-1'>
                    {current_user.isAuthenticated ? <Button className="button pass-button" variant="primary" onClick={addClickHandler}>Купить</Button> : null}
                    <Button className="button pass-button " variant="primary" onClick={imageClickHandler}>
                        Подробнее
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

/*
const PassCard: FC<Props> = ({ pass, imageClickHandler, addClickHandler }) => (
    <Card className="pass-card card h-100">
        <Card.Img className="bd-placeholder-img card-img-top pass-img mx-auto d-block" variant="top" src={pass.image || defaultImage} onClick={imageClickHandler}/>
        <Card.Body>
            <Card.Title>{pass.name}</Card.Title>
            <Card.Text>{pass.description}</Card.Text>
            <span>{pass.price} P</span>
            { <Button className="button pass-button float-end" variant="primary" onClick={addClickHandler}>Купить</Button> }
            <Button className="button pass-button float-end" variant="primary" onClick={imageClickHandler}>Подробнее</Button>
        </Card.Body>
    </Card>
)
*/


export default PassCard;
