import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDriver } from "../../../../ReduxSlices/driverState";

const DuserInfo = () => {
  const dispatch = useDispatch();
  const driver = useSelector((state) => state.driverInfo.driver);

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
      dispatch(setDriver({ key: "password", value: pwd.pwd1 }));
      
      console.log(driver);
      
      //navigate("/Driver-Profile");
    } else {
      alert("Passwords do not match. Please try again.");
    }
    if(driver.password===pwd.pwd1){
      axios.post('http://localhost:9092/signup/driver',driver).then(re=>console.log("registered!",driver));
      navigate("/");
    window.location.reload()
     }
    
  };
  function handlechange(e) {
    const {name, value}=e.target
    dispatch(setDriver({ key: name, value }));
  }
  return (
    <div className="Register">
      <form method="post" onSubmit={handleSubmit}>
        <h1>Enter Your Login Authentication Details</h1>
        <input
          type="text"
          placeholder="Username"
          name="user"
          value={driver.user}
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
      <p>user: {driver.user}</p>
    </div>
  );
};

export default DuserInfo;
