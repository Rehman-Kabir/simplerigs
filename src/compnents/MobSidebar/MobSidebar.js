import React from 'react'
import { NavLink } from "react-router-dom";
import './mobsidebar.css'

const MobSidebar = ({MobileSidebar, setMobileSidebar}) => {
  const CloseSidebar = () => {
        setMobileSidebar((prev) => !prev);
    };
  return (
    <>
    <div className={MobileSidebar ? "mobsidebar-container mobsidebar-active" : "mobsidebar-container" }>
      <div className="mob-nav-container">
        <div className="mob-nav-wapper">
          <div className="mob-close-btn-wrap">
            <button type='button' onClick={CloseSidebar}>
              <svg width="30" height="37" viewBox="0 0 56 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4502 2.9999L3.4867 17.445C2.83748 17.9319 2.83748 19.068 3.4867 19.5549L23.4502 34" stroke="#449552" stroke-width="6" stroke-miterlimit="10"></path><path d="M55.748 18.9058H8.03038" stroke="#449552" stroke-width="6" stroke-miterlimit="10"></path></svg>
            </button>
          </div>
          <ul className="mob-nav-link-wrap">
            <li><NavLink to="/dashboard" activeclassname="active" onClick={CloseSidebar}>DASHBOARD</NavLink></li>
            <li><NavLink to="/deposit" activeclassname="active" onClick={CloseSidebar}>DEPOSIT</NavLink></li>
            <li><NavLink to="/withdraw" activeclassname="active" onClick={CloseSidebar}>WITHDRAWAL</NavLink></li>
            <li><NavLink to="/referrals" activeclassname="active" onClick={CloseSidebar}>REFERRALS</NavLink></li>
            <li><NavLink to="/company" activeclassname="active" onClick={CloseSidebar}>COMPANY</NavLink></li>
            <li><NavLink to="/faqs" activeclassname="active" onClick={CloseSidebar}>FAQ</NavLink></li>
            <li><NavLink to="/terms" activeclassname="active" onClick={CloseSidebar}>TERMS OF USE</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default MobSidebar