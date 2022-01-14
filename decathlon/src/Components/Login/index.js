import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css';
import logo from '../../img/dec.png';
import cred from '../../apiSetup/credentials.json';

export default function Login() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(true);

    const onClickLogin = () => {
        console.log(cred);
        if (cred.username === user && cred.password === pass) {
            
        } else {
            setError(false)
        }
    }

    return (
        <div className='containerBox'>
            <div className='imgBox'>
                <img src={logo} />
            </div>
            <div className='loginContainer'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onClick={(e) => setUser(e.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" onClick={(e) => setPass(e.target.value)}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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