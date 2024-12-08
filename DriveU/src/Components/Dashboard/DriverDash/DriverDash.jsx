import { useDispatch, useSelector } from 'react-redux'
import './DrDash.css'
import { Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import { setCusData } from '../../../ReduxSlices/customerData'

const DriverDash = () => {
  const reloc=useLocation()

  return (
    <div>
        <div className=" menus">
          <div className='Menu-Bar'>
            <li><Link to={'/Job-Post'} id='links' className= {reloc.pathname==='/Job-Post'? "active":"" }>Job Post</Link></li>
            <li><Link to={'/Trip-Status'} id='links' className={reloc.pathname==="/Trip-Status"? "active":""}>Status</Link></li>
            <li><Link to={'/Payment'} id='links' className={reloc.pathname==="/Payment"? "active":""}>Payments</Link></li>
            <li><Link to={'/Driver-History'} id='links' className={reloc.pathname==="/Driver-History"? "active":""}>History</Link></li>
            <li><Link to={'/Driver-Profile'} id='links' className={reloc.pathname==="/Driver-Profile" ? "active":""}>Profile</Link></li>
          </div>
        </div>
    </div>
  )
}

export default DriverDash