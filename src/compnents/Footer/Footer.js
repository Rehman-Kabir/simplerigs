import React from 'react'
import LoginModal from '../../compnents/LoginModal/LoginModal'
import { Link } from 'react-router-dom'
import Master from '../../assets/images/mastercard.png'
import Visa from '../../assets/images/visa.png'
import Bitcoin from '../../assets/images/bitcoin2.png'

import './footer.css'
const Footer = () => {
    const [showModal, setShowModal] = React.useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
  return (
    <>
    <footer className='footer-main'>
        <div className="container">
            <h1 className='footer-heading'>Simple<span>rigs</span></h1>
            <div className="footer-wrap">
                <div className="footer-card">
                    <h1>We Accept</h1>
                    <div className="footer-card-img">
                        <a href="/"><img className='visa' src={Visa} alt="Visa" /></a>
                        <a href="/"><img className='master' src={Master} alt="Master" /></a>
                        <a href="/"><img className='bitcoinicon' src={Bitcoin} alt="Bitcoin" /></a>
                    </div>
                </div>
                <div className="footer-links">
                    <Link to="/company">Company &amp; Contacts</Link>
                    <Link to="/terms">Terms of use</Link>
                    <Link to="/faqs">Questions &amp; Answers</Link>
                </div>
                <div className="footer-mint-btn">
                    <button type='button' onClick={openModal}>START MINING <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>                    </span></button>
                </div> 
            </div>
            <div className="copyright">
                <p>© 2022 Simple Rig. All rights reserved.</p>
            </div>
        </div>
    </footer>
    <LoginModal showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
}

export default Footer