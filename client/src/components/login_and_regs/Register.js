import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

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

        axios.post('http://localhost:8000/api/user', {name, email, password})
            .then(res=>{
                console.log(res);
                console.log(res.data);

                navigate("/calendar/month");
            })
            .catch((err) => setErrors(err.response.data.error.errors))     
    }
    
    return (
        <div>
            <div className="login_box">
                <h3>Register</h3>
                <div className="form-group">
                    <form onSubmit={onSubmitHandler}>
                        <div className='bold-font'>
                            <label>Name:</label><br/>
                            <input type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
                        </div>
                        {errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}
                        <div className='bold-font'>
                            <label>Email:</label><br/>
                            <input type="text" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
                        </div>
                        {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
                        <div>
                            <label>Password:</label><br/>
                            <input type="password" value={password} onChange = {(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <label>Confirm Password:</label><br/>
                            <input type="password" value={confirmPassword} onChange = {(e)=>setConfirmPassword(e.target.value)}/>
                        </div>
                        {errors.password && <span style={{color:"red"}}>{errors.password.message}</span>}
                        <br/>
                        <button variant="contained" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;

