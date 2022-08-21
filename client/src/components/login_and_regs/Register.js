import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = (props) => {
    const {usersList, setUsersList} = props;

    const [name, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/user', {name, email, password, confirmPassword})
            .then(res=>{
                console.log(res);
                console.log(res.data);
                navigate("/calendar/month");
            })
            .catch((err) => {console.log(err.response);setErrors(err.response.data.error.errors)})     
    }
    
    return (
        <div>
            <Card className="text-center shadow m-5" >
                <Card.Body>
                    <Card.Title>REGISTER</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control value={name} onChange = {(e)=>setName(e.target.value)} type="input" placeholder="Enter name" />
                            {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control value={email} onChange = {(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                            {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control value={password} onChange = {(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                            {errors.password && <span style={{color:"red"}}>{errors.password.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Control value={confirmPassword} onChange = {(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                            {errors.confirmPassword && <span style={{color:"red"}}>{errors.confirmPassword.message}</span>}
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={onSubmitHandler}>Register</Button>
                    </Form>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default Register;

