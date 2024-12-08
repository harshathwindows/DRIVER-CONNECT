import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setCustomers} from "../../../ReduxSlices/customerState"
import axios from "axios"


const Address = () => {
  const dispatch=useDispatch()
  const customer=useSelector((state)=>state.customerInfo.customers)

    const addressdet=useNavigate()
    const toLogin=(e)=>{
      e.preventDefault()
      axios.post("http://localhost:9092/signup/customer", customer)
        .then(res=>console.log("Registered!!",customer)
        ).catch(err=>console.log(err))

        
        addressdet('/')
        //window.location.reload()
    }
    const handlechange=(e)=>{
      const {name , value}=e.target
      dispatch(setCustomers({key:name,value}))
    }
    
    function show(e){
      e.preventDefault()
      console.log(customer);
      
    }
  return (
    <div className="Register">
      <form method="post">
        <h1>Enter Your Address Details!</h1>
        <textarea placeholder="Address" name="address" value={customer.address} onChange={handlechange}/>
        <input type="text" placeholder="LandMark" name="landmark" value={customer.landmark} onChange={handlechange}/>
        <button onClick={toLogin}>Finish</button>
        <button onClick={show}>show</button>
      </form>
    </div>
  );
};

export default Address;
