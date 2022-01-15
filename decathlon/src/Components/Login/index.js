import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css';
import logo from '../../img/dec.png';
import cred from '../../apiSetup/credentials.json';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../actions/action';

export default function Login() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(true);
    const navigate = useNavigate();
    const myStatus = useSelector(state => state.userStatus);
    const dispatch = useDispatch();

    const onClickLogin = () => {
        if (cred.username == user && cred.password == pass) {
            console.log("Correct");
            dispatch(userLogin());
            navigate("../home", { replace: true })
        } else {
            setError(false)
        }
    }

    console.log(user, pass)

    return (
        <div className='containerBox'>
            <div className='imgBox'>
                <img src={logo} />
            </div>
            <div className='loginContainer'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUser(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Text hidden={error}>
                            Invalid Login credentials
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" onClick={onClickLogin}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}