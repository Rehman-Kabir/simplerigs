import React from 'react'
import Sidebar from '../../compnents/Sidebar/Sidebar';
import MobSidebar from '../../compnents/MobSidebar/MobSidebar'
import './withdraw.css'

const Withdraw = () => {
    const [MobileSidebar, setMobileSidebar] = React.useState(false);
    const CloseMobSidebar = () => {
        setMobileSidebar(!MobileSidebar);
    };
  return (
    <>
    <div className="dashboard-root-container">
        <div className="sidebar">
            <Sidebar/>
        </div>
        <div className="main-container">
            <div className="dashboard-container">
                <div className="withdraw-container">
                    <div class="dash-hamburger" onClick={CloseMobSidebar}>
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                    <h1 className='main-heading'>BALANCE</h1>
                    <div className="widthdraw-balance-container">
                        <div className="widthdraw-balance-content">
                            <div className="input-wrap">
                                <input placeholder="0.0002541010 " />
                                <button>BTC</button>
                            </div>
                            <div className="input-wrap">
                                <input placeholder="127" />
                                <button>USD</button>
                            </div>
                        </div>
                        <div className="balance-descp">
                            <div className="description">
                                <h4>1 BTC = $14307.35</h4>
                                <p>*Bitcoin prices has all conversion rate fees included</p>
                            </div>
                        </div>
                    </div>
                    <div className="withdraw-btn-wrap">
                        <button type='button'>WITHDRAW<span>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-right" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>    
                        </span></button>
                    </div>
                    <div className="previous-transaction">
                        <h3>Previous transactions</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>DATE</th>
                                    <th>AMT(USD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="first-field">$8.1023</td>
                                    <td>$8.1023</td>
                                </tr>
                                <tr>
                                    <td className="first-field">11/03/2022</td>
                                    <td>$8.1023</td>
                                </tr>
                                <tr>
                                    <td className="first-field">15/02/2022</td>
                                    <td>$8.1023</td>
                                </tr>
                                <tr>
                                    <td className="first-field">$8.1023</td>
                                    <td>$8.1023</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MobSidebar MobileSidebar={MobileSidebar} setMobileSidebar={setMobileSidebar}/>
    </>
  )
}

export default Withdraw