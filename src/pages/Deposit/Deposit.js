import React from 'react'
import Sidebar from '../../compnents/Sidebar/Sidebar';
import MobSidebar from '../../compnents/MobSidebar/MobSidebar'
import { Slider } from "@mui/material";
import { Link } from 'react-router-dom';

import GreenTractor from '../../assets/images/green-tractor.svg'
import YellowTractor from '../../assets/images/yellow-tractor1.png'
import YellowTractor2 from '../../assets/images/yellow-tractor2.png'
import RedTractor from '../../assets/images/red-tractor1.png'
import RedTractor2 from '../../assets/images/red-tractor2.png'
import CreditIcon from '../../assets/images/card.png'
import BitcoinIcon2 from '../../assets/images/bitcoin-icon-2.png'

import './deposit.css'

const Deposit = () => {
    const [MobileSidebar, setMobileSidebar] = React.useState(false);
    const [slideValue, setSlideValue] = React.useState(0);
    const [showTractor, setShowTractor] = React.useState(1);

    const CloseMobSidebar = () => {
        setMobileSidebar(!MobileSidebar);
    };
    const sliderChange = (e) => {
        setSlideValue(e.target.value);
    }
    React.useEffect(() => {
        if (slideValue <= 1000) {
            setShowTractor(1);
        }
        else if (slideValue <= 5000) {
            setShowTractor(2);
        }
        else if (slideValue <= 10000) {
            setShowTractor(3);
        }
        else if (slideValue <= 50000) {
            setShowTractor(4);
        }
        else {
            setShowTractor(5);
        }
    }, [slideValue])
  return (
    <>
    <div className="dashboard-root-container">
        <div className="sidebar">
            <Sidebar/>
        </div>
        <div className="main-container">
            <div className="dashboard-container">
                <div className="buy-plan-container">
                    <div class="dash-hamburger" onClick={CloseMobSidebar}>
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                    <h1 className='main-heading'>BUY PLANS</h1>
                    <h3 className='deposit-head'>Deposit</h3>
                        <div className="dashboard-calculator-container">
                        <div className="dash-calc-wrap">
                            <h2>CHOOSE YOUR DESIRED TRACTOR</h2>
                            <div className="form-wrap">
                                <div className="flex-mob">
                                    <div className="dash-form-field">
                                        <label htmlFor="">INVESTMENT IN $</label>
                                        <div className="dash-calc-field">
                                            <input type="text" value="$250" />
                                        </div>
                                    </div>
                                    <div className="dash-form-field">
                                        <label htmlFor="">POWER</label>
                                        <div className="dash-calc-field">
                                            <input type="text" value="4019 GH/s" />
                                        </div>
                                    </div>
                                </div>
                                <div className="range-slider">
                                    <Slider value={slideValue} onChange={(e) => sliderChange(e)} min={250} max={100000} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                </div>
                            </div>
                        </div>
                        <div className="calc-cta">
                            <div className="dash-calc-wallet-wrap">
                                <div className="calc-wallet-content">
                                    <div className="calc-wal-heading">
                                        <h1>Wallet Address</h1>
                                        <span>qViLJfdGaP4EeHnDyJbEGQysnCpwk</span>
                                    </div>
                                    
                                    <div className="calc-list">
                                        <h3>Calculator</h3> 
                                        <div className="calc-list-item">
                                            <span className='circle'></span>
                                            <span>Daily Income</span>
                                        </div>
                                        <h1>$1.80</h1>
                                    </div> 
                                    <div className="calc-list">
                                        <div className="calc-list-item">
                                            <span className='circle'></span>
                                            <span>Monthly Income</span>
                                        </div>
                                        <h1>$11.80</h1>
                                    </div> 
                                    <div className="calc-list">
                                        <div className="calc-list-item">
                                            <span className='circle'></span>
                                            <span>Yearly Income</span>
                                        </div>
                                        <h1>$131.80</h1>
                                    </div> 
                                </div>
                                <div className="calc-truck-img">
                                    {/* <img src= alt="green tractor" /> */}
                                    <div>
                                        <img alt="" className="green-tractor img-resize" src={GreenTractor} style={{ display: showTractor === 1 ? "block" : "none" }} />
                                        <img alt="" className="green-tractor" src={YellowTractor} style={{ display: showTractor === 2 ? "block" : "none" }} />
                                        <img alt="" className="green-tractor" src={RedTractor} style={{ display: showTractor === 3 ? "block" : "none" }} />
                                        <img alt="" className="green-tractor" src={YellowTractor2} style={{ display: showTractor === 4 ? "block" : "none" }} />
                                        <img alt="" className="green-tractor" src={RedTractor2} style={{ display: showTractor === 5 ? "block" : "none" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="calc-btn-wrap">
                        <div className="dash-calc-btn">
                            <div className="dash-credit-btn">
                                <Link to='/creditcardcheck'><img src={CreditIcon} alt=""/> CREDIT CARD <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg> 
                                </span></Link>
                            </div>
                            <div className="dash-credit-btn">
                                <Link to='/bitcoincheck'><img src={BitcoinIcon2} alt=""/> BITCOIN <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                                </span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MobSidebar MobileSidebar={MobileSidebar} setMobileSidebar={setMobileSidebar}/>
    </>
  )
}

export default Deposit