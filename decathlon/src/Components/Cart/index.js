import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../img/dec.png';
import delIcon from '../../img/delete.jpg';
import { useNavigate } from "react-router-dom";
import { addToCart, emptyCart, saveCart } from '../../actions/action';
import './index.css';

export default function Cart() {

    const [myItems, setItems] = useState([]);

    const cartItem = useSelector(state => state.addItems);
    const myStatus = useSelector(state => state.userStatus);
    const savedCart = useSelector(state => state.addToSavedItems);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (myStatus == 'GUEST') {
            navigate("../", { replace: true })
        }
        let totalValue = 0;
        cartItem && cartItem.map(item => totalValue = totalValue + Number(item.val))
        setPrice(totalValue)
        setItems(cartItem);
    }, [])

    useEffect(() => {
        let totalPrice = 0;
        myItems && myItems.map(item => totalPrice = totalPrice + Number(item.val) * Number(item.qty))
        setPrice(totalPrice)
    }, [myItems])

    const onClickDelete = (item) => {
        let filterList = myItems.filter(val => val.item !== item)
        setItems(filterList);
    }

    const onClickIncr = (item) => {
        const newItem = myItems.map(val => val.item == item.item ? { ...val, ['qty']: Number(val['qty']) + 1 } : val)
        setItems(newItem);
    }

    const onClickDec = (item) => {
        const newItem = myItems.map(val => val.item == item.item ? item.qty <= 1 ? val : { ...val, ['qty']: Number(val['qty']) - 1 } : val)
        setItems(newItem)
    }

    const onClickCheckout = () => {
        dispatch(saveCart({ myItems }));
        dispatch(emptyCart());
        navigate('../home', { replace: true })
    }

    return (
        <div className='container'>
            <div className='imgBox'>
                <img src={logo} className='img1' />
            </div>
            <div>
                <Row>
                    <Col md='8'>
                        {myItems.map((item, i) =>
                            <Row key={item.item + i} className='itemCol'>
                                <Col className='textBold my-auto'>
                                    <div className=''> {item.item.toUpperCase()} </div>
                                </Col>
                                <Col className='my-auto'>
                                    <span> {item.val} Rs </span>
                                </Col>
                                <Col>
                                    <button className='qtyButton' onClick={() => onClickIncr(item)} >+</button>
                                    <span>{item.qty}</span>
                                    <button className='qtyButton' onClick={() => onClickDec(item)} >-</button>
                                </Col>
                                <Col>
                                    <img src={delIcon} width={'20px'} onClick={() => onClickDelete(item.item)} />
                                </Col>
                            </Row>)}
                    </Col>
                    <Col md='3' className='checkOut'>
                        <Row>
                            <Col className='text-center checkoutText'>
                                <h5>Checkout</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='textBold'> Discount : </Col>
                            <Col> 0 </Col>
                        </Row>
                        <Row>
                            <Col className='textBold'> Items </Col>
                            <Col> {myItems && myItems.length} </Col>
                        </Row>
                        <Row>
                            <Col className='textBold'> Total : </Col>
                            <Col className='textBold'>
                                {price} Rs
                            </Col>
                        </Row>
                        <Row className='text-center'>
                            <Col>
                                <Button className='buttonCheckout' onClick={() => onClickCheckout()} >Checkout</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}