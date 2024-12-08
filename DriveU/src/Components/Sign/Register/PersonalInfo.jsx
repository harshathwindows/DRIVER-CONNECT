import { useNavigate } from "react-router-dom"
import './Register.css'
import { useDispatch, useSelector } from "react-redux";
import {setCustomers} from "../../../ReduxSlices/customerState"


const PersonalInfo = () => {

  const dispatch=useDispatch()
  const customer=useSelector((state)=>state.customerInfo.customers)

    const navigate=useNavigate()

    const sub=(e)=>{
      e.preventDefault()
    }
    const redirect=()=>{
        navigate('/User-Info')
    }
    function handlechange(e){
      const {name , value} = e.target
      dispatch(setCustomers({key:name,value}))
    }


  return (
    <div className="Register">
        <form method="post" onSubmit={sub}>
          <h1>Please Enter Your Personal Info!</h1>
          <input type="text" placeholder="Name"  name="name" value={customer.name} onChange={handlechange}/>
          <input type="email" placeholder="Email" name="email"  value={customer.email} onChange={handlechange}/>
          <input type="tel" placeholder="Phone Number" name="phone" value={customer.phone} onChange={handlechange}/>
          <button type="submit" onClick={redirect}>Continue</button>
        </form>

    </div>
  )
}

export default PersonalInfo