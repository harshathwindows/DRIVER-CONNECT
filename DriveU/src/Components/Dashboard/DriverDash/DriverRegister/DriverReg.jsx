//import React from 'react'

import DriverDash from "../DriverDash"
import '../DrDash.css'
import { useDispatch, useSelector } from "react-redux"

const DriverReg = () => {
  const dispatch=useDispatch()
  const driver=useSelector((state)=>state.driverInfo.driver)
  
  return (
    <div>
      <div>

      </div>
      <DriverDash/>
    </div>
  )
}

export default DriverReg