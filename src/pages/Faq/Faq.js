import React from 'react'
import MobSidebar from '../../compnents/MobSidebar/MobSidebar';
import Footer from '../../compnents/Footer/Footer'

import './faq.css'
const Faq = () => {
    const [MobileSidebar, setMobileSidebar] = React.useState(false);
    const CloseMobSidebar = () => {
        setMobileSidebar(!MobileSidebar);
    };
  return (
    <>
    <div className="company-container">
        <div className="faq-hero">
            <div className="company-hero-header">
                <div class="comp-hamburger" onClick={CloseMobSidebar}>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </div>
            <div className="hero-head-wrap">
                <h1>FREQUENTLY</h1>
                <h1>ASK QUESTION</h1>
            </div>
        </div>
        <div className="container">
            <div className="ask-content">
                <div className="ask-content-inner">
                    <div className="first-part">
                        <h3>WHO ARE WE</h3>
                        <ul>
                            <li>
                                <p>The most simple Cloud Mining Copany on the market. No need to have any special knowledges or any know-how, no need to choose between GPU or ASICs. Get Your first income within 3 simple actions. Just click on a calculator, select desired hash power amount, make a deposit and start earn.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="second-part">
                        <h3>HOW TO START?</h3>
                        <ul>
                            <li>
                                <p>
                                    Go through a simple registration and payment procedure to join us.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Use the calculator to know Your potencial profit (all fees already deducted, what You see is what You'll get - no hidden costs or fees)
                                </p>
                            </li>
                            <li>
                                <p>
                                    Make a refundable deposit using one of offered options.
                                </p>
                            </li>
                            <li>
                                <p>
                                    You can increase Your total hash rate any time, the more hash rate You got, the more BTC will be generated.
                                </p>
                            </li>
                            <li>
                                <p>
                                    You are not required to buy or install any additional equipment.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="third-part">
                        <h3>PAYOUTS AND WITHDRAWAL</h3>
                        <ul>
                            <li>
                                <p>You will be paid daily at the same time.</p>
                            </li>
                            <li>
                                <p>All payouts are in BTC.</p>
                            </li>
                            <li>
                                <p>Minimum withdrawal amount is 0.001 BTC (will be processed within 24 hours)Withdrawal fees are covered by the company.</p>
                            </li>
                            <li>
                                <p>No hidden fees.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="fourth-part">
                        <h3>EXPENSES AND MAINTENANCE FEES</h3>
                        <ul>
                            <li>
                                <p>All fees already deducted and won't cost You any extra. Income stated on the calculator is NET.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MobSidebar MobileSidebar={MobileSidebar} setMobileSidebar={setMobileSidebar}/>
    <Footer/>
    </>
  )
}

export default Faq