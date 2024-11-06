import { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import defaultImage from "../bus.png";


interface Props {
    id: number
    name: string
    description: string
    price: number
    image: string
    imageClickHandler: () => void;
}

const PassCard: FC<Props> = ({ name, description, price, image, id, imageClickHandler }) => (
    <Card className="card pass-card h-100">
        <Card.Img className="pass-img" variant="top" src={image || defaultImage} onClick={imageClickHandler}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <Button className="cardButton" href="#" target="_blank" variant="primary" onClick={imageClickHandler}>Подробнее</Button>
        </Card.Body>
    </Card>
)


export default PassCard;
