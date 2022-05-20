import React from 'react'
import CheckoutTruck from '../../assets/images/checkout-truck.png'
import CreditCheckoutImg from '../../assets/images/creditcheck.png'
import './creditcardcheck.css'

const CreditcardCheck = () => {
  return (
    <>
    <div className="bitcoin-check-root-container">
      <div className="bitcoin-check-inner">
        <div className="checkout-heading">
          <h1>CHECKOUT</h1>
        </div>
        <div className="bitcoin-check-wrapper">
          <div className="bitcoin-left-warp">
            <div className="bitcoin-img">
              <img src={CreditCheckoutImg} alt="bitcoin check" />
            </div>
            <div className="need-help">
              <h4>
              <span>
                <svg width="15" height="15" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 23.3H14V20.2H17.1V23.3H17Z" fill="#449552"></path><path d="M15.5 3.09998C22.3 3.09998 27.9 8.7 27.9 15.5C27.9 22.3 22.3 27.9 15.5 27.9C8.7 27.9 3.10001 22.3 3.10001 15.5C3.10001 8.7 8.7 3.09998 15.5 3.09998ZM15.5 0C7 0 0 7 0 15.5C0 24 7 31 15.5 31C24 31 31 24 31 15.5C31 7 24 0 15.5 0Z" fill="#449552"></path><path d="M13.9999 18.6C13.9999 16.4 14.8999 15.7 15.6999 14.9C16.1999 14.6 16.4999 14.1 16.5999 13.7C16.8999 13.2 16.8999 12.8 16.8999 12.1C16.8999 11.4 16.6999 11 16.3999 10.6C16.0999 10.3 15.7999 10 15.1999 10C14.6999 10 13.6999 10.2 13.6999 12.3H10.8999V11.7C10.8999 10.3 11.3999 9.39998 12.0999 8.59998C12.9999 8.09998 14.0999 7.80005 15.3999 7.80005C16.8999 7.80005 17.9999 8.1 18.7999 9C19.5999 9.9 19.9999 10.9 19.9999 12.1C19.9999 15.8 16.8999 16 16.8999 18.6H13.9999Z" fill="#449552"></path></svg>
              </span> need help?</h4>
              <span>Ask your manager for more details24/7 Live support</span>
            </div>
          </div>
          <div className="bitcoin-right-warp">
            <h4>WE ACCEPT BITCOINS</h4>
            <h4>WWW.CHANGELLY.COM</h4>
            <div className="bitcoin-address-details">
              <h5>STEP 1: COPY YOUR WALLET ADDRESS</h5>
              <span>12VGByZ8ksFMqTR5weeT
                <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30 0C31.1 0 32 0.9 32 2V22C32 23.1 31.1 24 30 24H24V30C24 31.1 23.1 32 22 32H2C0.9 32 0 31.1 0 30V10C0 8.9 0.9 8 2 8H8V2C8 0.9 8.9 0 10 0H30ZM20 12H4V28H20V12ZM28 4H12V8H22C23.1 8 24 8.9 24 10V20H28V4Z" fill="#36352C"></path></svg>
              </span>
            </div>
            <div className="bitcoin-address-details">
              <h5>STEP 2: OPEN THE WEBSITE LINK BELOW</h5>
              <span>WWW.CHANGELLY.COM</span>
            </div>
            <div className="bitcoin-address-details">
              <h5>STEP 3: ENTER THE AMOUNT AND WALLET ADDRESS</h5>
              <h5>STEP 4: FILL THE FORM AND COMPLETE THE TRANSFER</h5>
            </div>
            <div className="verification-btn">
              <button type='button'>VERIFY TRANSACTION</button>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-truck">
        <img src={CheckoutTruck} alt="truck" />
      </div>
    </div>
    </>
  )
}

export default CreditcardCheck