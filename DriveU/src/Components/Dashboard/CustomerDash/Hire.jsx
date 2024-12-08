//import React from 'react'
import { useEffect, useState } from "react";
import "./CDash.css";
import CustomerDash from "./CustomerDash";
import { useDispatch, useSelector } from "react-redux";
import { setHire } from "../../../ReduxSlices/hireData";
import axios from "axios"
import { setCusData } from "../../../ReduxSlices/customerData";

const Hire = () => {

  const [userData,setUserData]=useState()
  const dispatch=useDispatch()
  const dataSession = sessionStorage.getItem("userLogin");
  const userLogin = dataSession ? JSON.parse(dataSession) : null;
  const user = userLogin?.user;
  const cusData=useSelector((state)=>state.userData.customerData)

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userID=cusData[0]?.CUS_ID
          const response = await axios.get(`http://localhost:9092/customer/${user}`)
          dispatch(setCusData(response.data))
          dispatch(setHire({key:"cusID",value: userID}))
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      }
    };
    
    fetchUserData();
  }, [user]);

  
  
  
  const hireData=useSelector((state)=>state.hireReq.hire)
  
  
  const [act, setAct] = useState(false);
  const hidden = {
    display: act ? "block" : "none",
  };
  //usestate  and functions for date and time placeholder change
  const [todate, setToDate] = useState(false);
  const[toedate,setToEdate]=useState(false)
  const[totime,setTotime]=useState(false)
  function edate(){
    setToEdate(true)
  }
  const timeChange=()=>{
    setTotime(true)
  }
  const dateChange = () => {
    setToDate(true);
  };
  
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserData(cusData);
  
    const userID = cusData[0]?.CUS_ID; // Access userID from cusData
  
    dispatch(setHire({ key: name, value }));
    if (act) {
      dispatch(setHire({ key: "triptype", value: "Round-Trip" }));
      dispatch(setHire({ key: "cusID", value: userID }));
    } else {
      dispatch(setHire({ key: "triptype", value: "One-Way" }));
      dispatch(setHire({ key: "multiday", value: "0" }));
      dispatch(setHire({ key: "enddate", value: "null" }));
      dispatch(setHire({ key: "cusID", value: userID }));
    }
  };
  
  const hireRefresh = () => {
    setAct(!act);
    setTotime(false)
    setToDate(false);
  };
  
  const hireReq=async(e)=>{
    e.preventDefault();
   
    //dispatch(setHire({key:"cusID",value:`${userID}`}))
    await axios.post("http://localhost:9092/customer/hire", hireData)
    console.log(hireData);
    console.log(userData);
    //console.log(userID);
    
   // window.location.reload()
    }
  return (
    <div className="Dashboard">
      <div className="hireform">
        <div className="triptype">
          <label
            onClick={hireRefresh}
            className={act === false ? "active" : ""}
          >
            One-Way
          </label>
          <label onClick={hireRefresh} className={act == true ? "active" : ""}>
            Round-Trip
          </label>
        </div>
        <div className="oneway">
          <form method="post" onSubmit={hireReq}>
            <input type="text" placeholder="Trip Start Location" name="startlocation" onChange={handlechange}/>

            <input type="text" placeholder="Trip End Location" name="endlocation" onChange={handlechange}/>

            <input
              type={todate ? "date" : "text"}
              placeholder="Start Date"
              onClick={dateChange}
              name="startdate"
              onChange={handlechange}
            />

            <input type={totime ? "time" : "text"} placeholder="Trip Start Time" onClick={timeChange} name="triptime" onChange={handlechange}/>

            <select name="vehicletype" onChange={handlechange}>
              <option value={""}>Vehicle Type</option>
              <option value={"5-Seater"}>5-Seater</option>
              <option value={"7-Seater"}>7-Seater</option>
            </select>
            <input type="text" placeholder="Trip Fare" name="tripfare" onChange={handlechange}/>
            <button>Hire Request</button>
          </form>
        </div>
        <div className="Round" style={hidden}>
          <form method="post" onSubmit={hireReq}>
            <input type="text" placeholder="Start Location" name="startlocation" onChange={handlechange} />
            <input type="text" placeholder="End Location" name="endlocation" onChange={handlechange}/>
            <input
              type={todate ? "date" : "text"}
              placeholder="Start Date"
              onClick={dateChange}
              name="startdate"
              onChange={handlechange}
            />
            <input type={totime ? "time" : "text"} placeholder="Start Time" onClick={timeChange} name="triptime" onChange={handlechange}/>
            <input
              type={toedate ? "date" : "text"}
              placeholder="End Date"
              onClick={edate}
              name="enddate"
              onChange={handlechange}
            />
            <div className="split">
            <input type="number" placeholder="Multi-Day" name="multiday" onChange={handlechange}/>
            <select name="vehicletype" onChange={handlechange}>
              <option value={""}>Vehicle Type</option>
              <option value={"5-Seater"}>5-Seater</option>
              <option value={"7-Seater"}>7-Seater</option>
            </select>
            </div>

            <input type="text" placeholder="Trip Fare" name="tripfare" onChange={handlechange}/>
            
            <button type="submit">Hire Request</button>
          </form>
        </div>
      </div>
      <CustomerDash />
    </div>
  );
};

export default Hire;
