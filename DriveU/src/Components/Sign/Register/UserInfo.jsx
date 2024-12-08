import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setCustomers} from "../../../ReduxSlices/customerState"


const UserInfo = () => {


  const dispatch=useDispatch()
  const customer=useSelector((state)=>state.customerInfo.customers)


  const [pwd, setPwd] = useState({
    pwd1: "",
    pwd2: "",
  });

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPwd({
      ...pwd,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pwd.pwd1 === pwd.pwd2) {
      dispatch(setCustomers({key:"password", value: pwd.pwd1}))
      navigate("/Address-Info");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };
  function handlechange(e){
    const {name , value} = e.target
    dispatch(setCustomers({key:name,value}))
  }
  return (
    <div className="Register">
      <form method="post" onSubmit={handleSubmit}>
        <h1>Enter Your Login Authentication Details</h1>
        <input
          type="text"
          placeholder="Username"
          name="user"
          value={customer.user}
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="Set Password"
          name="pwd1"
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="pwd2"
          onChange={handlePasswordChange}
        />
        <button type="submit">Continue</button>
      </form>
      <p>Set Password: {pwd.pwd1}</p>
      <p>Confirm Password: {pwd.pwd2}</p>
    </div>
  );
};

export default UserInfo;
