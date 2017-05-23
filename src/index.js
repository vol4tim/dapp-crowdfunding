/* eslint global-require: 0 */
import React from 'react'
import { render } from 'react-dom'
import Plugin from './shared/components/app/plugin'
import NotAccounts from './shared/components/app/notAccounts'
import Header from './shared/components/app/header'
import Footer from './shared/components/app/footer'
import Loader from './shared/components/app/loader'

const startApp = () => {
  require('./app');
}
const notWeb3 = () => {
  render(
    <div className="container" id="maincontainer">
      <Plugin />
    </div>,
    document.getElementById('root')
  )
}
const notAccounts = () => {
  render(
    <div>
      <Header title="dApp Aira" />
      <NotAccounts />
      <div className="statusbar"><span>Cant syncing, check your account</span></div>
      <Footer />
    </div>,
    document.getElementById('root')
  )
}
const loader = () => {
  render(
    <div>
      <Header title="dApp Aira" />
      <Loader />
      <Footer />
    </div>,
    document.getElementById('root')
  )
}
let stepCurrent = 0;
const stepMax = 5;
const interval = setInterval(() => {
  if (typeof web3 !== 'undefined' && web3.eth.accounts.length > 0) {
    clearInterval(interval);
    startApp();
    return;
  } else if (stepCurrent >= stepMax) {
    clearInterval(interval);
    if (typeof web3 === 'undefined') {
      notWeb3();
    } else {
      notAccounts();
    }
    return;
  }
  stepCurrent += 1;
  if (typeof web3 !== 'undefined' && web3.eth.accounts.length <= 0) {
    console.log('load accounts', web3.eth.accounts);
  }
  loader();
}, 1000);
