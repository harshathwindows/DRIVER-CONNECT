import React, { useEffect, useState } from 'react'
import DiverDash from './DriverDash'
import DriverDash from './DriverDash'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux'

const DProfile = () => {
  const driverData=useSelector((state)=>state.driverData.driverData)
  const[userData,setUserData]=useState()
  useEffect(()=>{
    setUserData(driverData)
  },[])
    const toDriver=useNavigate()
    const AddDriver=()=>{
        toDriver("/Driver-Personal")
    }
  return (
      <div className="Dashboard">
      <div className="profile">
        <FontAwesomeIcon icon={faUser} className="user" />
        {userData ? (
          userData.map((val, index) => (
            <div key={index}>
              <h3>{val.DR_USER}</h3>
              <h3>{val.DR_NAME}</h3>
              <h3>{val.DR_EMAIL}</h3>
              <h3>{val.DR_PHONE}</h3>
              <h3>{val.DR_ADDRESS}</h3>
              <h3>{val.DR_LICENSE}</h3>
            </div>
          ))
        ) : (
          <p>No Data Found</p>
        )}
        <button >Click</button>
        <button onClick={AddDriver}>Add Driver</button>
      </div>
        <DriverDash/>
    </div>
  )
}

export default DProfile