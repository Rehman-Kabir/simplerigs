import React from 'react'
import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/style.css'
import './register.css'
const Register = () => {
    const [phoneValue, setPhoneValue] = React.useState();
    const phoneNumberChange = (e) => {
        setPhoneValue();
    }
  return (
    <>
    <div className="register-form-container">
        <div className="register-fields-flex">
            <div className="login-inp">
                <label htmlFor="name">Name</label>
                <input type="email" required/>
            </div>
            <div className="login-inp">
                <label htmlFor="surname">Surname</label>
                <input type="password" required/>
            </div>
        </div>
        <div className="login-inp">
            <label htmlFor="email">Email ID</label>
            <input type="email" required/>
        </div>
        <div className="login-inp">
            <label htmlFor="password">Password</label>
            <input type="password" required/>
        </div>
        <div className="login-inp">
            <label htmlFor="country">Phone No.</label>
            <PhoneInput
                country={'us'}
                value={phoneValue}
                onChange={() => phoneNumberChange()}
            />
        </div>
        <div className="register-form-btn-warp">
            <button type='button'>Register <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>                    </span></button>
        </div>
    </div>
    </>
  )
}

export default Register