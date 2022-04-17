import React from 'react';
import { Card } from 'react-bootstrap';
import pizza from './PizzaProduct';
 
const roll = pizza

function Pizza(props) {
    return (
        <div className='m-2'>
           <h1>Пицца</h1>
        {roll.map(a=>{
            return(
                <Card >
                <Card.Img variant="top"style={{padding:'7px', height:"350px"}} src={a.img} />
                <Card.Body>
                    <Card.Title>{a.title}</Card.Title>
                    <Card.Text>{a.description}
                        <h2>{a.price}</h2>
                    </Card.Text>
                </Card.Body>
                <div className='border'></div>
            </Card>
            )
        })}
        </div>
    );
}

export default Pizza;