import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import defaultImage from "../bus.png";
import "../index.css"
import {dest_img} from "../../target_config"


interface Props {
    id: number
    name: string
    description: string
    price: number
    image: string
    imageClickHandler: () => void;
}

const PassCard: FC<Props> = ({ name, description, price, image, imageClickHandler }) => (
    <Card className="card pass-card h-100">
        <Card.Img className="bd-placeholder-img card-img-top pass-img mx-auto d-block" variant="top" src={(dest_img + image)  || defaultImage} onClick={imageClickHandler}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <span>{price} P</span>
            <Button className="button pass-button float-end" variant="primary" onClick={imageClickHandler}>Подробнее</Button>
        </Card.Body>
    </Card>
)


export default PassCard;
