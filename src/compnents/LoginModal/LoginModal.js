import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './loginmodal.css'
import Login from '../Login/Login'
import Register from '../Register/Register'
const LoginModal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
    const [activeTab, setActiveTab] = useState("register")

    const animation = useSpring({
        config: {
            duration: 450
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });


    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const CloseToIcon = () => {
        setShowModal((prev) => !prev);
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
  return (
    <>
    {showModal ? (
        <div className="modal-background" id='scroll' onClick={closeModal} ref={modalRef}>
            <animated.div style={animation} className="modal-container">
                <div className="modal-head">
                    <h1>SIMPLE<span>RIGS</span></h1>
                    <h3>YOU ARE JUST ONE STEP AWAY FROM MINING</h3>
                    <div
                        class="close"
                        onClick={CloseToIcon}
                    >
                        <div class="line1"></div>
                        <div class="line2"></div>
                    </div>
                </div>
                <div className="modal-tab-wrap">
                    <button className={activeTab === 'register' ? 'btn-active' : ''} onClick={()=>setActiveTab('register')}>REGISTER</button>
                    <span></span>
                    <button className={activeTab === 'login' ? 'btn-active' : ''} onClick={()=>setActiveTab('login')}>LOGIN</button>
                </div>
                {activeTab === 'login' && ( 
                    <Login/>
                )}
                {activeTab === 'register' && ( 
                    <Register/>
                )}
            </animated.div>
        </div>
    ) : null}
    </>
  )
}

export default LoginModal