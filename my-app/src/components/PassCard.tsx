import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import defaultImage from "../bus.png";
import "../index.css"
import { Pass } from '../api/Api';


interface Props {
    pass: Pass
    imageClickHandler: () => void;
    addClickHandler: () => void;
}

const PassCard: FC<Props> = ({ pass, imageClickHandler, addClickHandler }) => (
    <Card className="pass-card card h-100">
        <Card.Img className="bd-placeholder-img card-img-top pass-img mx-auto d-block" variant="top" src={pass.image || defaultImage} onClick={imageClickHandler}/>
        <Card.Body>
            <Card.Title>{pass.name}</Card.Title>
            <Card.Text>{pass.description}</Card.Text>
            <span>{pass.price} P</span>
            <Button className="button pass-button float-end" variant="primary" onClick={addClickHandler}>Купить</Button>
            <Button className="button pass-button float-end" variant="primary" onClick={imageClickHandler}>Подробнее</Button>
        </Card.Body>
    </Card>
)


export default PassCard;
