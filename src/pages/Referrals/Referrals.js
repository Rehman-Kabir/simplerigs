import React from 'react'
import Sidebar from '../../compnents/Sidebar/Sidebar';
import MobSidebar from '../../compnents/MobSidebar/MobSidebar'
import './referrals.css'

const Referrals = () => {
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
                <div className="referrals-container">
                    <div class="dash-hamburger" onClick={CloseMobSidebar}>
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                    <h1 className='main-heading'>YOUR REFERRAL LINK</h1>
                    <div className="balance-container">
                        <h3>BALANCE</h3>
                        <div className="refer-txt">
                            <p>Tell your friends about the SIMPLERIGS and get a reward from the platform. SIMPLERIGS Referral Program gives you the opportunity to earn 20% from the deposits of people you have invited to the platform.</p>
                            <p>You invited a friend who then bought a miner contract for $1,000, so you get a $200 reward.</p>
                        </div>
                    </div>
                    <div className="refer-stats-container">
                        <div className="refer-stats">
                            <h3>TOTAL CLICKS</h3>
                            <span>100</span>
                        </div>
                        <div className="refer-stats">
                            <h3>TOTAL SIGN-UPS</h3>
                            <span>100</span>
                        </div>
                        <div className="refer-stats">
                            <h3>TOTAL INCOME</h3>
                            <span>0.11125 BTC</span>
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

export default Referrals