import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUserGraduate } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginRegister = () => {

    const [action,setaction]=useState('')

    const registerLink = () => {
        setaction('active')
    }
    const loginLink = () => {
        setaction('')
    }


return (
<div className={`wrapper ${action}`}>
    <div className="form-box login">
        <form action="">
        <h1>Login</h1>
        <div className="input-boxx">
            <input type="text" placeholder="Username" required/>
            <FaUserGraduate className= "icon"/>
            </div>
        <div className="input-boxx">
            <input type="password" placeholder="Password" required/>
            <FaLock className="icon" />
            </div>
        <div className="remember-forget">
            <label> <input type="checkbox"></input>
            Remember me</label>
            <a href="#">Forget Password</a>
            
    </div>
    <button type="submit">Login</button>
    <div className="Register-link">
        <p>Dont have an account ? <a href="#" onClick={registerLink}>Register</a>
    </p>
</div>
</form>
</div>
<div className="form-box Register">
        <form action="">
        <h1>Registration</h1>
        <div className="input-boxx">
            <input type="text" placeholder="Username" required/>
            <FaUserGraduate className= "icon"/>
            </div>
        <div className="input-boxx">
            <input type="email" placeholder="Email" required/>
            <MdEmail className="icon" />
            </div>
        <div className="input-boxx">
            <input type="password" placeholder="Password" required/>
            <FaLock className="icon" />
            </div>
        <div className="remember-forget">
            <label> <input type="checkbox"></input>
           I agree to terms & conditions</label>
           
            
    </div>
    <button type="submit">Register</button>
    <div className="Register-link">
        <p>Already have an account <a href="#" onClick={loginLink}>Login</a>
    </p>
</div>
</form>
</div>


</div>
)
}

export default LoginRegister