import React from 'react';
import { Card } from 'react-bootstrap';
import savtrackt from './ZavrtactProduct';

const as = savtrackt

function Zavtract(props) {
    return (
        <div className='m-2'>
            <h1>Завтрак</h1>
            {as.map(a=>{
            return(
                <Card >
                <Card.Img variant="top"style={{padding:'7px',height:"380px"}} src={a.img} />
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

export default Zavtract;