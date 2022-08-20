import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Login = (props) => {
    const {usersList, setUsersList} = props;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/user/login', {email, password})
            .then(res=>{
                console.log(res);
                console.log(res.data);

                navigate("/calendar/month");
            })
            .catch((err) => {console.log(err.response);setErrors(err.response.data)})     
    }
    
    return (
        <div>
            <div className="login_box">
                <h3>Login</h3>
                <div className="form-group">
                    <form onSubmit={onSubmitHandler}>
                        <div className='bold-font'>
                            <label>Email:</label><br/>
                            <input type="text" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
                        </div>
                        {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
                        <div>
                            <label>Password:</label><br/>
                            <input type="password" value={password} onChange = {(e)=>setPassword(e.target.value)}/>
                        </div>
                        {errors && <span style={{color:"red"}}>{errors.message}</span>}
                        <br/>
                        <button variant="contained" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

