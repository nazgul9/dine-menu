import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Menu(props) {
    return (
        <div className=' m-2 p-2'>
            <h1 className='inline-block m-2 text-center pricePizza'>МЕНЮ:</h1>

            <Card className=' m-2 texth1' as={Link} to="/Zavtract" style={{ borderRadius: "50px" }}><h1 >Завтрак</h1></Card>

            <Card className=' m-2 texth1' as={Link} to='/Burger' style={{ borderRadius: "50px" }}><h1 >Бургеры</h1></Card>

            <Card className=' m-2 texth1' as={Link} to="/Shaurma" style={{ borderRadius: "50px" }}><h1 >Шаурма</h1></Card>

            <Card className=' m-2 texth1' as={Link} to="/Pizza" style={{ borderRadius: "50px" }}><h1 >Пицца</h1></Card>

            <Card className=' m-2 texth1' as={Link} to='/Krylyshki' style={{ borderRadius: "50px" }}><h1>Крылышки</h1></Card>

            <Card className=' m-2 texth1' as={Link} to="/GRool" style={{ borderRadius: "50px" }}><h1 >Горячий Роллы</h1></Card> 

             <Card className=' m-2 texth1' as={Link} to="/HRool" style={{ borderRadius: "50px" }}><h1 >Холодные Роллы</h1></Card>

            <Card className=' m-2 texth1' as={Link} to="/GNapit" style={{ borderRadius: "50px" }}><h1 >Горячии Напитки</h1></Card>
            
            <Card className=' m-2 texth1' as={Link} to="/Napitki" style={{ borderRadius: "50px" }}><h1 >Напитки</h1></Card>

            <Card className=' m-2 texth1' as={Link} to="/Soci" style={{ borderRadius: "50px" }}><h1 >Сок</h1></Card>

            <Card className=' m-2 texth1' as={Link} to="/NasiBlud" style={{ borderRadius: "50px" }}><h1 >Блюда</h1></Card>

            <Card className=' m-2 texth1' as={Link} to="/Salad" style={{ borderRadius: "50px" }}><h1 >Салат</h1></Card>
           
            <Card className=' m-2 texth1' as={Link} to="/Desert" style={{ borderRadius: "50px" }}><h1 >Десерты</h1></Card>

            <Card className=' m-2 texth1' as={Link} to="/Sous" style={{ borderRadius: "50px" }}><h1 >Соус</h1></Card>

            <Card className=' m-2 texth1' as={Link} to="/Wok" style={{ borderRadius: "50px" }}><h1 >Вок</h1></Card>


        </div>
    );
}

export default Menu;