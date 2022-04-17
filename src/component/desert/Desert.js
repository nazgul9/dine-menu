import React from 'react';
import { Card } from 'react-bootstrap';
import deserts from './DesertProduct'

const desert = deserts

function Desert(props) {
    return (
        <div className='m-2'>
            <h1>
                Десерт
            </h1>
            {desert.map(a => (
                <Card >
                    <Card.Img className='images'style={{padding:'7px',height:"300px"}} variant="top" src={a.img} />
                    <Card.Body>
                        <Card.Title>{a.title}</Card.Title>
                        <Card.Text>{a.description}
                            <h2>{a.price}</h2>
                        </Card.Text>
                    </Card.Body>
                    <div className='border'></div>
                </Card>
            ))}

        </div>
    );
}

export default Desert;