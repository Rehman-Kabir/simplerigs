import React from 'react'
import Sidebar from '../../compnents/Sidebar/Sidebar';
import MobSidebar from '../../compnents/MobSidebar/MobSidebar';
import './dashboard.css'

const Dashboard = () => {
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
                            <div className="plan">
                                <svg id="plan" viewBox="0 0 562 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" fill='#49925B' d="M517.893 181.449H526.201C533.601 181.449 539.601 175.649 539.701 168.549L561.101 13.0489C561.101 5.94889 555.001 0.148926 547.601 0.148926H13.501C6.00098 0.148926 0.000976562 5.94889 0.000976562 13.0489L21.301 168.549C21.301 175.649 27.401 181.449 34.801 181.449H42.9308C108.028 165.167 190.631 155.449 280.501 155.449C370.289 155.449 452.823 165.194 517.893 181.449Z" />
                                </svg>
                                <div className="plan-content">
                                    <div className="plan-text">
                                        <p>MASTER PLAN</p>
                                        <p>0000050</p>
                                    </div>
                                    <div className="plan-text">
                                        <p>NO.AVL</p>
                                        <p>10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="plan">
                                <svg id="plan" viewBox="0 0 562 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" fill='#3DAF67' d="M517.893 181.449H526.201C533.601 181.449 539.601 175.649 539.701 168.549L561.101 13.0489C561.101 5.94889 555.001 0.148926 547.601 0.148926H13.501C6.00098 0.148926 0.000976562 5.94889 0.000976562 13.0489L21.301 168.549C21.301 175.649 27.401 181.449 34.801 181.449H42.9308C108.028 165.167 190.631 155.449 280.501 155.449C370.289 155.449 452.823 165.194 517.893 181.449Z" />
                                </svg>
                                <div className="plan-content">
                                    <div className="plan-text">
                                        <p>MASTER PLAN</p>
                                        <p>0000050</p>
                                    </div>
                                    <div className="plan-text">
                                        <p>NO.AVL</p>
                                        <p>10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="plan">
                                <svg id="plan" viewBox="0 0 562 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" fill='#6ABE66' d="M517.893 181.449H526.201C533.601 181.449 539.601 175.649 539.701 168.549L561.101 13.0489C561.101 5.94889 555.001 0.148926 547.601 0.148926H13.501C6.00098 0.148926 0.000976562 5.94889 0.000976562 13.0489L21.301 168.549C21.301 175.649 27.401 181.449 34.801 181.449H42.9308C108.028 165.167 190.631 155.449 280.501 155.449C370.289 155.449 452.823 165.194 517.893 181.449Z" />
                                </svg>
                                <div className="plan-content">
                                    <div className="plan-text">
                                        <p>MASTER PLAN</p>
                                        <p>0000050</p>
                                    </div>
                                    <div className="plan-text">
                                        <p>NO.AVL</p>
                                        <p>10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="plan">
                                <svg id="plan" viewBox="0 0 562 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" fill='#8BD66C' d="M517.893 181.449H526.201C533.601 181.449 539.601 175.649 539.701 168.549L561.101 13.0489C561.101 5.94889 555.001 0.148926 547.601 0.148926H13.501C6.00098 0.148926 0.000976562 5.94889 0.000976562 13.0489L21.301 168.549C21.301 175.649 27.401 181.449 34.801 181.449H42.9308C108.028 165.167 190.631 155.449 280.501 155.449C370.289 155.449 452.823 165.194 517.893 181.449Z" />
                                </svg>
                                <div className="plan-content">
                                    <div className="plan-text">
                                        <p>MASTER PLAN</p>
                                        <p>0000050</p>
                                    </div>
                                    <div className="plan-text">
                                        <p>NO.AVL</p>
                                        <p>10</p>
                                    </div>
                                </div>
                            </div>
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