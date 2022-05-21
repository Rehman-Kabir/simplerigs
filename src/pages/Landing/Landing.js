import React from 'react'
import { Link } from 'react-router-dom'
import { Slider } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";

import Carousel from "react-bootstrap/Carousel"
import LoginModal from '../../compnents/LoginModal/LoginModal';

import 'bootstrap/dist/css/bootstrap.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import './landing.css'

import Master from '../../assets/images/mastercard.png'
import Visa from '../../assets/images/visa.png'
import Bitcoin from '../../assets/images/bitcoin2.png'
import MintGif from '../../assets/images/mint-gif.gif'
import WaveImg from '../../assets/images/wave-blue.png'
import TruckImg1 from '../../assets/images/tractor1.png'
import TruckImg2 from '../../assets/images/tractor2.png'
import TruckImg3 from '../../assets/images/tractor3.png'
import TruckImg4 from '../../assets/images/Professional-tractor.png'
import TruckImg5 from '../../assets/images/Boss-tractor.png'
import CoinIcon from '../../assets/images/coin-icon.png'
import Leave from '../../assets/images/leave.png'
import GreenTractor from '../../assets/images/green-tractor.svg'
import YellowTractor from '../../assets/images/yellow-tractor1.png'
import YellowTractor2 from '../../assets/images/yellow-tractor2.png'
import RedTractor from '../../assets/images/red-tractor1.png'
import RedTractor2 from '../../assets/images/red-tractor2.png'
import CoinMintIcon from '../../assets/images/4.png'
import CreditIcon from '../../assets/images/card.png'
import BitcoinIcon2 from '../../assets/images/bitcoin-icon-2.png'
import AboutTruck from "../../assets/images/about-truck.png"
import MobRedTractorMob from '../../assets/images/7.png'


const Landing = () => {
    const [slideValue, setSlideValue] = React.useState(0);
    const [showTractor, setShowTractor] = React.useState(1);
    const [showModal, setShowModal] = React.useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
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
    {/* Hero Section */}
    <div className="hero-container">
        <div className="container">
            <div className="hero-content">
                <div className="hero-btn-wrap">
                    <div className="hero-btn">
                        <button type='button' onClick={openModal}>Login <span>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-right" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>    
                        </span></button>
                    </div>
                    {/* <div className="hamburger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
				    </div> */}
                </div>
                <div className="hero-text">
                    <div className="hero-text-wrap">
                        <h1 className='hero-title'>SIMPLE <span>RIGS</span></h1>
                        <h2 className="hero-sub-title">THE BEST&nbsp;<span>CLOUD MINING</span>&nbsp;COMPANY</h2>
                        <p>We offer the most easy cloud mining process on cutting edge technology equipment</p>
                    </div>
                    <div className="hero-mint-wrap">
                        <div className="hero-mint-btn-wrap">
                            <button>START MINING</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Feature Section */}
        <div className="feature-mining-container">
            <div className="mining-container">
                <div className="check-area">
                    <div className="check-area-inner">
                        <p>CHECK HOW EASY <span>MINING CAN BE</span></p>
                        <button>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 6 16" class="vertical-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 14l6-6-6-6v12z"></path></svg>                        </button>
                        <img className="gold-coin" alt="Coin Icon" src={CoinMintIcon} />
                    </div>
                </div>
            </div>
        </div>
    {/* Mint Section */}
    <div className="mint-counter-container">
        <div className="mint-gif">
            <img src={MintGif} alt="" />
        </div>
        <div className="mint-content">
            <h3>You're just 30 Sec Away</h3>
            <h2><span className='txt-green'>START</span> MINING <span className='hallow-txt'>NOW</span></h2>
            <div className="mint-btn-warp">
                <button type='button' onClick={openModal}>Register <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>                    </span></button>
            </div>
        </div>
    </div>
    {/* Truck Slider Section */}
    <div className="truck-container">
        <div className="wave-img">
            <img src={WaveImg} alt="wave" />
        </div>
        <div className="truck-head-wrap">
            <span className='action'>TAKE ACTION</span>
            <h1>SELECT THE MOST PROFITABLE <span>TRACTOR</span></h1>
        </div>
    </div>
    {/* Slider */}
    <div className="root-content">
        <Swiper
            slidesPerView={3}
            spaceBetween={0}
            freeMode={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
            breakpoints={{
            1500 : {
                slidesPerView:4,
            },
            1080 : {
                slidesPerView:3,
            },
            920 : {
                slidesPerView:3,
            },
            448 : {
                slidesPerView:2,
            },
            320 : {
                slidesPerView:1,
            }
            }}>
            <SwiperSlide>
                <div className="truck-slide-item">
                    <div className="truck-slide-img">
                        <img src={TruckImg3} alt="truck" />
                    </div>
                    <div className="truck-detail-wrap">
                        <h3 className='txt-green'>STARTER</h3>
                        <h2 className='price'>$250</h2>
                        <span className='stock'>In stock</span>
                        <div className="profit-wrap">
                            <h3>PROFITABILITY</h3>
                            <span>0.00000050</span>
                            <span>From 12% monthly</span>
                            <span className='border-green'></span>
                        </div>
                        <div className="payout">
                            <h3>Payouts</h3>
                            <span>Daily in BTC</span>
                        </div>
                        <div className="learn-btn-warp">
                            <button type='button'>Learn More <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>                    </span></button>
                        </div>
                    </div>
                </div> 
            </SwiperSlide>
            <SwiperSlide>
                <div className="truck-slide-item">
                    <div className="truck-slide-img">
                        <img src={TruckImg2} alt="truck" />
                    </div>
                    <div className="truck-detail-wrap">
                        <h3 className='txt-green'>ADVANCE</h3>
                        <h2 className='price'>$1000</h2>
                        <span className='stock'>In stock</span>
                        <div className="profit-wrap">
                            <h3>PROFITABILITY</h3>
                            <span>0.00000050</span>
                            <span>From 12% monthly</span>
                            <span className='border-green'></span>
                        </div>
                        <div className="payout">
                            <h3>Payouts</h3>
                            <span>Daily in BTC</span>
                        </div>
                        <div className="learn-btn-warp">
                            <button type='button'>Learn More <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>                    </span></button>
                        </div>
                    </div>
                </div> 
            </SwiperSlide>
            <SwiperSlide>
                <div className="truck-slide-item">
                    <div className="truck-slide-img">
                        <img src={TruckImg1} alt="truck" />
                    </div>
                    <div className="truck-detail-wrap">
                        <h3 className='txt-green'>PREMIUM</h3>
                        <h2 className='price'>$5000</h2>
                        <span className='stock'>In stock</span>
                        <div className="profit-wrap">
                            <h3>PROFITABILITY</h3>
                            <span>0.00000050</span>
                            <span>From 12% monthly</span>
                            <span className='border-green'></span>
                        </div>
                        <div className="payout">
                            <h3>Payouts</h3>
                            <span>Daily in BTC</span>
                        </div>
                        <div className="learn-btn-warp">
                            <button type='button'>Learn More <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>                    </span></button>
                        </div>
                    </div>
                </div> 
            </SwiperSlide>
            <SwiperSlide>
                <div className="truck-slide-item">
                    <div className="truck-slide-img">
                        <img src={TruckImg4} alt="truck" />
                    </div>
                    <div className="truck-detail-wrap">
                        <h3 className='txt-green'>PROFESSIONAL</h3>
                        <h2 className='price'>$10000</h2>
                        <span className='stock'>In stock</span>
                        <div className="profit-wrap">
                            <h3>PROFITABILITY</h3>
                            <span>0.00000050</span>
                            <span>From 12% monthly</span>
                            <span className='border-green'></span>
                        </div>
                        <div className="payout">
                            <h3>Payouts</h3>
                            <span>Daily in BTC</span>
                        </div>
                        <div className="learn-btn-warp">
                            <button type='button'>Learn More <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>                    </span></button>
                        </div>
                    </div>
                </div> 
            </SwiperSlide>
            <SwiperSlide>
                <div className="truck-slide-item">
                    <div className="truck-slide-img">
                        <img src={TruckImg5} alt="truck" />
                    </div>
                    <div className="truck-detail-wrap">
                        <h3 className='txt-green'>BOSS</h3>
                        <h2 className='price'>$50000</h2>
                        <span className='stock'>In stock</span>
                        <div className="profit-wrap">
                            <h3>PROFITABILITY</h3>
                            <span>0.00000050</span>
                            <span>From 12% monthly</span>
                            <span className='border-green'></span>
                        </div>
                        <div className="payout">
                            <h3>Payouts</h3>
                            <span>Daily in BTC</span>
                        </div>
                        <div className="learn-btn-warp">
                            <button type='button'>Learn More <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>                    </span></button>
                        </div>
                    </div>
                </div> 
            </SwiperSlide>
        </Swiper>
        {/* Invest Section */}
        <div className="container">
            <div className="invest-container">
                <div className="invest-wrap">
                    <div className="invest-detail">
                        <div className="coin-icon">
                            <div className="invest-coin-img">
                                <img src={CoinIcon} alt="coin" />
                            </div>
                            <div className="invest-heading-data">
                                <div className="invest-content">
                                    <h1>652</h1>
                                </div>
                                <div className="invest-content">
                                    <h1>1.12X</h1>
                                </div>
                                <div className="invest-content hide-desk">
                                    <h1 className='hide-heading'>$478.100</h1>
                                </div>
                            </div>
                            <div className="invest-text-data">
                                <div className="invest-content">
                                    <span className='first'>INVESTORS <br/>JOINED  TODAY</span>
                                </div>
                                <div className="invest-content">
                                    <span className='second'>INVESTORS <br/>JOINED  TODAY</span>
                                </div>
                                <div className="invest-content">
                                    <span className='third-mob'>TODAY <br /> PAYOUTS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invest-content last">
                        <h1>$478.100</h1>
                        <span className='third'>TODAY <br /> PAYOUTS</span>
                    </div>
                </div>
                <div className="try-now-wrap">
                    <div className="try-content">
                        <h1>DAILY BTC PAYOUTS. NO DELAY. NO HOLDS.</h1>
                        <div className="try-btn-warp">
                            <button type='button' onClick={openModal}>Try Now <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>                    </span></button>
                        </div>
                    </div>
                </div>
                <img src={Leave} alt="leave" className='leave'/>
            </div>
        </div>
        {/* Calculator Section */}
        <div className="container">
            <div className="calculator-container">
                <div className="calc-wrap">
                    <h2>CHOOSE YOUR DESIRED TRACTOR</h2>
                    <div className="form-wrap">
                        <div className="flex-mob">
                            <div className="form-field">
                                <label htmlFor="">INVESTMENT IN $</label>
                                <div className="calc-field">
                                    <input type="text" value="$250" />
                                </div>
                            </div>
                            <div className="form-field">
                                <label htmlFor="">POWER</label>
                                <div className="calc-field">
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
                    <div className="calc-wallet-wrap">
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
                                <img alt="" className="green-tractor calc-img-resize" src={GreenTractor} style={{ display: showTractor === 1 ? "block" : "none" }} />
                                <img alt="" className="green-tractor" src={YellowTractor} style={{ display: showTractor === 2 ? "block" : "none" }} />
                                <img alt="" className="green-tractor" src={RedTractor} style={{ display: showTractor === 3 ? "block" : "none" }} />
                                <img alt="" className="green-tractor" src={YellowTractor2} style={{ display: showTractor === 4 ? "block" : "none" }} />
                                <img alt="" className="green-tractor" src={RedTractor2} style={{ display: showTractor === 5 ? "block" : "none" }} />
                            </div>
                        </div>
                    </div>
                    <div className="calc-btn-wrap">
                        <div className="calc-btn">
                            <div className="credit-btn">
                                <Link to='/creditcardcheck'><img src={CreditIcon} alt=""/> CREDIT CARD <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                                </span></Link>
                            </div>
                            <div className="credit-btn">
                                <Link to='/bitcoincheck'><img src={BitcoinIcon2} alt=""/> BITCOIN <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="arrow-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
                                </span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* About Section */}
        <div className="aboutus">
            <div className="aboutus-inner row">
                <div className="col-6 left">
                    <div className="about-head">
                        <h1 className="about-tile">SIMPLE<span>RIGS</span></h1>
                        <h2>ALL ABOUT WHO WE ARE</h2>
                    </div>
                    <div className="img-wrap">
                        <img className="tractor-drag" src={AboutTruck} alt="tractor-drag" />
                    </div>
                </div>
                <div className="col-6 right">
                    <div className="right-inner">
                        <h2>ABOUT US</h2>

                        <Carousel>
                            <Carousel.Item >
                                <Carousel.Caption>
                                    <ul>
                                        <li><p>Learn more about company’s startup research and investments,</p></li>
                                        <li><p>guarantees and attitude to ecology issues &amp; security matter</p></li>
                                        <li><p>Our company was founded in 2017 during the original mining boom and rapid private mining farms development</p></li>
                                        <li><p>All these settings with software and hardware were looking scary and annoying.</p></li>
                                        <li><p>That's why we've decided to make it simple. You're just a few clicks from Your first mining rig.</p></li>
                                    </ul>
                                </Carousel.Caption>
                            </Carousel.Item  >
                            <Carousel.Item >
                                <Carousel.Caption>
                                    <div>
                                        <ul>
                                            <li><p>We do care about the environment.</p></li>
                                            <li><p>We are using 100% renewable energy sources.</p></li>
                                            <li><p>Our data centers are located at Linde in the Northern Cape and Dreunberg in the Eastern Cape, both sun drenched regions boasting one of the best conditions for solar power in the world.</p></li>
                                            <li><p>We cooperate only with the largest suppliers.</p></li>
                                            <li><p>Procurement of equipment is calculated in the tens of millions</p></li> 
                                        </ul>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <Carousel.Caption>
                                    <ul>
                                        <li><p>The main idea was to make mining accessible to anyone - from a guy who was just starting his research and a way into the cryptocurrencies world, to a major investor who is looking to multiply his capital.</p></li>
                                        <li><p>For all those reasons, we can guarantee our customers high income and low costs.</p></li>
                                        <li><p>Regular mining requires certain knowledge and know-how and large starting investments, so it was pretty hard for ordinary persons to start from a scratch.</p></li>
                                    </ul>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="tractor-drag-mobile-wrap">
                        <img className="tractor-drag-mobile" src={MobRedTractorMob} alt="tractor-drag-mobile" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className='home-footer'>
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

export default Landing