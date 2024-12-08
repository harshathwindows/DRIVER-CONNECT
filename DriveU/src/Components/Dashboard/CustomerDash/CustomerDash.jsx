import { useDispatch, useSelector } from 'react-redux'
import './CusDash.css'
import { Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import { setCusData } from '../../../ReduxSlices/customerData'

const CustomerDash = () => {
  const reloc=useLocation()

  return (
    <div>
        <div className=" menus">
          <div className='Menu-Bar'>
            <li><Link to={'/Hire'} id='links' className= {reloc.pathname==='/Hire'? "active":"" }>Hire</Link></li>
            <li><Link to={'/Status'} id='links' className={reloc.pathname==="/Status"? "active":""}>Status</Link></li>
            <li><Link to={'/Recent-Drivers'} id='links' className={reloc.pathname==="/Recent-Drivers"? "active":""}>Drivers</Link></li>
            <li><Link to={'/Customer-History'} id='links' className={reloc.pathname==="/Customer-History"? "active":""}>History</Link></li>
            <li><Link to={'/Customer-Profile'} id='links' className={reloc.pathname==="/Customer-Profile"? "active":""}>Profile</Link></li>
          </div>
        </div>
    </div>
  )
}

export default CustomerDash