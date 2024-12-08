import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./CDash.css";
import CustomerDash from "./CustomerDash";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCusData } from "../../../ReduxSlices/customerData";

const CProfile = () => {
  const [userData,setUserData]=useState()
  
  const hireData=useSelector((state)=>state.hireReq.hire)
  const cusData=useSelector((state)=>state.userData.customerData)
  useEffect(()=>{
  setUserData(cusData);
  },[])
  const date=new Date().getVarDate
  
  const handleClick = (e) => {
    e.preventDefault()
    console.log(date);
    console.log(hireData);
    
    console.log("User:", user);
    console.log("User Data:", userData);
    
    
  };

  return (
    <div className="Dashboard">
      <div className="profile">
        <FontAwesomeIcon icon={faUser} className="user" />
        {userData ? (
          userData.map((val, index) => (
            <div key={index}>
              <h3>{val.CUS_USER}</h3>
              <h3>{val.CUS_NAME}</h3>
              <h3>{val.CUS_EMAIL}</h3>
              <h3>{val.CUS_PHONE}</h3>
              <h3>{val.CUS_ADDRESS}</h3>
              <h3>{val.CUS_LANDMARK}</h3>
            </div>
          ))
        ) : (
          <p>No Data Found</p>
        )}
        <button onClick={handleClick}>Click</button>
      </div>
      <CustomerDash />
    </div>
  );
};

export default CProfile;
