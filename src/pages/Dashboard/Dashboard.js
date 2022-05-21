import React from 'react'
import Sidebar from '../../compnents/Sidebar/Sidebar';
import MobSidebar from '../../compnents/MobSidebar/MobSidebar';
import './dashboard.css'
import Plans from '../../compnents/Plans/Plans';

const Dashboard = () => {
    const [MobileSidebar, setMobileSidebar] = React.useState(false);
    const CloseMobSidebar = () => {
        setMobileSidebar(!MobileSidebar);
    };
    const PlansData = [
        {
            color: "#49925B",
            planTitle: "MASTER PLAN",
            planNumber: "0000050",
            avlNumber: 10
        },
        {
            color: "#3DAF67",
            planTitle: "SUB MASTER PLAN",
            planNumber: "0000050",
            avlNumber: 10
        },
        {
            color: "#6ABE66",
            planTitle: "PREMIUM PLAN",
            planNumber: "0000050",
            avlNumber: 10
        },
        {
            color: "#8BD66C",
            planTitle: "ADVANCE PLAN",
            planNumber: "0000050",
            avlNumber: 10
        }
    ];
  return (
    <>
    <div className="dashboard-root-container">
        <div className="sidebar">
            <Sidebar/>
        </div>
        <div className="main-container">
            <div className="dashboard-container">
                <div class="dash-hamburger" onClick={CloseMobSidebar}>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <h1 className='main-heading'>Welcome to Dashboard</h1>
                <div className="plan-payout-container">
                    <div className="plan-container">
                        <h3 className='plan-heading'>MY PLANS</h3>
                        <div className="plan-items">
                            {
                                PlansData.map((plan, index) => <Plans data={plan} key={index}/>)
                            }
                        </div>
                        <div className="add-btn-wrap">
                            <div className="link-wrap">
                                <a href="/">ADD +</a>
                            </div>
                        </div>
                    </div>
                    <div className="payout-container">
                        <h3 className='payout-heading'>PAYOUT</h3>
                        <div className="payout">
                            <ul>
                                <li>
                                    <h4>Balance</h4>
                                    <p>0.10001005 BTC</p>
                                </li>
                                <li>
                                    <h4>Last Master Plan Payout</h4>
                                    <p>0.10001005 BTC</p>
                                </li>
                                <li>
                                    <h4>Last SUB Master Plan Payout</h4>
                                    <p>0.10001005 BTC</p>
                                </li>
                                <li>
                                    <h4>Last Premium Plan Payout</h4>
                                    <p>0.10001005 BTC</p>
                                </li>
                                <li>
                                    <h4>Last Advance Plan Payout</h4>
                                    <p>0.10001005 BTC</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="revenue">
                    <h3>REVENUE</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>PLANS</th>
                                <th>Master Plan</th>
                                <th>Premium Plan</th>
                                <th>Advance Plan</th>
                                <th >TOTAL(USD)</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td className="first-field">Average Daily</td>
                                <td>0.0000010 BTC</td>
                                <td>0.0000010 BTC</td>
                                <td>0.0000010 BTC</td>
                                <td>$125</td>
                            </tr>
                            <tr>
                                <td className="first-field">Average Weekly</td>
                                <td>0.0000010 BTC</td>
                                <td>0.0000010 BTC</td>
                                <td>0.0000010 BTC</td>
                                <td>$135</td>
                            </tr>
                            <tr>
                                <td className="first-field">Average Monthly</td>
                                <td>0.0000010 BTC</td>
                                <td>0.0000010 BTC</td>
                                <td>0.0000010 BTC</td>
                                <td>$1047</td>
                            </tr>
                            <tr>
                                <td className="first-field">Average Daily</td>
                                <td>0.0000010 BTC</td>
                                <td>0.0000010 BTC</td>
                                <td>0.0000010 BTC</td>
                                <td>$125</td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    </div>
    <MobSidebar MobileSidebar={MobileSidebar} setMobileSidebar={setMobileSidebar}/>
    </>
  )
}

export default Dashboard