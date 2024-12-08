import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDriver } from '../../../../ReduxSlices/driverState';
import { useNavigate } from 'react-router-dom';
import "../../../Sign/Register/Register.css"

const Dpersonal = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const driver=useSelector((state)=>state.driverInfo.driver);

    const handlechange=(e)=>{
        const {name, value}=e.target
        dispatch(setDriver({key:name,value}))
    }
    const redirect=()=>{
        navigate("/Driver-User");
    }
  return (
    <div className="Register">
        <form method="post">
          <h1>Please Enter Your Personal Info!</h1>
          <input type="text" placeholder="Name"  name="name" value={driver.name} onChange={handlechange}/>
          <input type="email" placeholder="Email" name="email"  value={driver.email} onChange={handlechange}/>
          <input type="tel" placeholder="Phone Number" name="phone" value={driver.phone} onChange={handlechange}/>
          <textarea placeholder="Address" name="address" value={driver.address} onChange={handlechange}/>
          <input type="text" placeholder="License No" name="license" value={driver.license} onChange={handlechange}/>

          <button type="submit" onClick={redirect}>Continue</button>
        </form>

    </div>

  )
}

export default Dpersonal