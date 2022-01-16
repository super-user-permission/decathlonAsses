import React, { useEffect, useState } from 'react';
import Items from '../../apiSetup/sportGood.json';
import logo from '../../img/dec.png';
import './index.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import cartLogo from '../../img/shoppingCart.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../../actions/action';
import profile from '../../img/profile.png';

export default function Home() {

    const myStatus = useSelector(state => state.userStatus);
    const myItems = useSelector(state => state.addItems);
    const [items, setItems] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setItems(myItems.length)
    }, [])

    const onClickAdd = (item, val) => {
        let qty = 1
        dispatch(addToCart({ item, val, qty }));
        setItems(myItems.length);
    }

    const onClickCart = () => {
        navigate("../cart", { replace: true })
    }

    return (
        <div className='container'>

            <div className='headerLogo'>
                <img src={logo} className='img1' />
            </div>
            <Row className='cartImg text-center'>
                <Col md={5} className='my-auto'>
                    <span> {myStatus == 'GUEST' ? 'Login' : 'My Account'} </span>
                </Col>
                <Col md={3}>
                    <img src={profile} width={'40px'} height={'40px'} />
                </Col>
                <Col md={2} >
                    <img src={cartLogo} width={'35px'} height={'35px'} onClick={() => onClickCart()} />
                </Col>
                <Col md={1} className='my-auto'>
                    <span className='cartItem'>{items}</span>
                </Col>
            </Row>

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

        </div>
    )
}