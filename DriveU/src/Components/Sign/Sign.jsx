//import React from 'react'
import { useState } from 'react';
//import './Sign.css';
import { Link, useNavigate } from 'react-router-dom';

const Sign = () => {

    const [isRegister, setIsRegister] = useState(false);

    // Event handlers to toggle between register and login modes
    const handleRegisterClick = () => {
      setIsRegister(true);
    };
  
    const handleLoginClick = () => {
      setIsRegister(false);
    };
    const[checkRole,setCheckRole]=useState('');
    const navigate=useNavigate()
    const valRole=(e)=>{
      setCheckRole(e.target.value)
      let check=checkRole
      if(check==='Customer'){
        navigate("/Register-Customer")
      }
      else if(check==='Driver'){
        navigate("/Register-Driver")
      }
    }
  return (
    <div>
        <div className={`container ${isRegister ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <p>Are You A ?</p>
                    <input type="radio" name="role" value="Customer" checked={checkRole==='Customer'} onChange={valRole}/><label>Customer</label>
                    <input type="radio" name="role" value="Driver" checked={checkRole==='Driver'} onChange={valRole}/><label>Driver</label><br/>
                    <button onClick={valRole}>Continue</button>
                    
                </form>
            </div>
            <div className="form-container sign-in">
                <form action="">
                    <h1>Login Your Account</h1>
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='name' />
                    <Link to={'/Forgot'}>forgot</Link>
                    <button>signIn</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Register your personal details to use our site features</p>
                        <p>Already have an Account ?</p>
                        <button className="hidden" onClick={handleLoginClick}  id="login">Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello Friend!</h1>
                        <p>Enter your identifications to use our site features</p>
                        <p>Don`t have an Account ?</p>
                        <button className="hidden" onClick={handleRegisterClick} id="register">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sign