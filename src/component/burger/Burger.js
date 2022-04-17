import React from 'react';
import { Card } from 'react-bootstrap';
import Burgers from './burgerProduct'

const product = Burgers


function Burger(props) {
    return (
        <div className='m-2'>
            <h1>Гамбургеры</h1>
            {product.map(a=>(
  <Card >
    {/* <div className='images' style={{
    backgroundImage: 'URL(' + a.img + ')',
    backgroundSize:"cover ",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundAttachment:"fixed"
 

  }}></div> */}
  <Card.Img className='images' variant="top"style={{padding:'7px',height:"350px"}} src={a.img} />
  <Card.Body >
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

export default Burger;