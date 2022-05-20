import React from 'react'
import { NavLink } from "react-router-dom";
import './sidebar.css'

const Sidebar = () => {
  return (
    <>
    <div className="nav-container">
        <div className="nav-wapper">
            <ul className="nav-link-wrap">
                <li><NavLink to="/dashboard" activeclassname="active">DASHBOARD</NavLink></li>
                <li><NavLink to="/deposit" activeclassname="active">DEPOSIT</NavLink></li>
                <li><NavLink to="/withdraw" activeclassname="active">WITHDRAWAL</NavLink></li>
                <li><NavLink to="/referrals" activeclassname="active">REFERRALS</NavLink></li>
                <li><NavLink to="/company" activeclassname="active">COMPANY</NavLink></li>
                <li><NavLink to="/faqs" activeclassname="active">FAQ</NavLink></li>
                <li><NavLink to="/terms" activeclassname="active">TERMS OF USE</NavLink></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar