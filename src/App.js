import React from 'react';
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing';

import Dashboard from './pages/Dashboard/Dashboard';
import Referrals from './pages/Referrals/Referrals';
import Deposit from './pages/Deposit/Deposit';
import Withdraw from './pages/Withdraw/Withdraw';
import BitcoinCheck from './pages/BitcoinCheck/BitcoinCheck';
import CreditcardCheck from './pages/CreditcardCheck/CreditcardCheck';
import Company from './pages/Company/Company';
import Terms from './pages/Terms/Terms';
import Faq from './pages/Faq/Faq';

import './App.css';

function App() {	
  return (
    <div className="App">
    <Routes>
		<Route path="/" exact element={<Landing/>} />
		<Route path="bitcoincheck" exact element={<BitcoinCheck/>} />
		<Route path="creditcardcheck" exact element={<CreditcardCheck/>} />
		<Route path="dashboard" exact element={<Dashboard/>} />
		<Route path="deposit" exact element={<Deposit/>} />
		<Route path="withdraw" exact element={<Withdraw/>} />
		<Route path="referrals" exact element={<Referrals/>} />
		<Route path="company" exact element={<Company/>} />
		<Route path="faqs" exact element={<Faq/>} />
		<Route path="terms" exact element={<Terms/>} />
	</Routes>
    </div>
  );
}

export default App;
