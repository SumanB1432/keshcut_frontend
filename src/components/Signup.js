import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const navigate = useNavigate()
    useEffect(() => {


        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")

        }
    })
    

    const collectData = async () => {
        console.warn(name, email, password);
        if(!name){
            alert("please provide your name")
        }
        if(!email){
            alert("please provide your email")
        }
        if(!password){
            alert("please provide password")
        }
        
        if(name && email && password ){

        let result = await fetch('https://keshcutaiassignament-production.up.railway.app/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json();
        console.warn(result)
        if(result.auth && result.User) {
            localStorage.setItem("user", JSON.stringify(result.User))
            localStorage.setItem("token", JSON.stringify(result.auth))
            navigate("/")

        }
        else if(!result.auth || !result.User) {
            alert("name should be only contain alphabate")
            alert("please provide a valid email")
            alert("password should be contain at least one alphabet ,one special char and one number")
        }
    }
    }
    return (
        <div className='register'>
            <h1>SignUp</h1>
            <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name'></input>
            {/* { error && !name && <span className='addproduct-val'>Enter valid Name</span>} */}
            <input className='inputBox' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'></input>
            <input className='inputBox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'></input>
            <button onClick={collectData} className="signup-button" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp