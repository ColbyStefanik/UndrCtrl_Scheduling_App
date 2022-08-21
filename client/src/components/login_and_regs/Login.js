import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = (props) => {
    const {usersList, setUsersList} = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/calendar/login', {email, password})
            .then(res=>{
                console.log(res);
                console.log(res.data);

                navigate("/calendar/month");
            })
            .catch((err) => {console.log(err.response);setErrors(err.response.data)})     
    }
    
    return (
        <div>
            <Card className="text-center shadow m-5" >
                <Card.Body>
                    <Card.Title>LOGIN</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control value={email} onChange = {(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                            {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control value={password} onChange = {(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                            {errors && <span style={{color:"red"}}>{errors.message}</span>}
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={onSubmitHandler}>Login</Button>
                    </Form>
                    
                </Card.Body>
                <Card.Footer className="text-muted">
                <Link to="/register" className="btn btn-clear">Register</Link>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Login;

