import React, { useEffect, useState } from 'react';
import Items from '../../apiSetup/sportGood.json';
import logo from '../../img/dec.png';
import './index.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import cartLogo from '../../img/shoppingCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../../actions/action';

export default function Home() {

    const myStatus = useSelector(state => state.userStatus);
    const myItems = useSelector(state => state.addItems);
    const [items, setItems] = useState(0)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (myStatus == 'GUEST') {
            navigate("../", { replace: true })
        }
    }, [])

    const onClickAdd = (item, val) => {
        dispatch(addToCart({ item, val }));
        console.log(myItems);
        setItems(myItems.length);
    }

    const onClickCart = () => {
        navigate("../cart", { replace: true })
    }

    console.log(myItems);

    return (
        <div className='container'>

            <div className='headerLogo'>
                <img src={logo} />
            </div>

            <Row xs={1} md={3} className="g-4">
                {Items.items.map((val, i) =>
                    <Col key={i}>
                        <Card
                            bg={"light"}
                            className='mb-2 text-center'
                            border='dark'
                            style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>{val.itemName}</Card.Title>
                                <Card.Text>
                                    {val.description}
                                </Card.Text>
                                <Card.Title>
                                    {val.price} Rs
                                </Card.Title>
                                <Card.Footer>
                                    <Button size='md' variant="primary" onClick={() => onClickAdd(val.itemName, val.price)} >Add to Cart</Button>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
            <div className='cartImg' onClick={() => onClickCart()} >
                <img src={cartLogo} />
                <span className='cartItem'>{items}</span>
            </div>

        </div>
    )
}