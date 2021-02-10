import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import './CardPage.css';
import { FaSave } from "react-icons/fa";

function CardPage (props) {
    console.log(props)
    return(
        <div className="container">
            <Card  className="col-sm-4 py-2">
                <Card.Header><h6>{props.title}</h6></Card.Header>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.author}</Card.Title>
                    <Card.Text>
                    {props.abstract}
                    </Card.Text>
                    <Button type="url" variant="info" href={props.url}>View</Button>
                </Card.Body>
            </Card>
        </div>
    );

}

export default CardPage;