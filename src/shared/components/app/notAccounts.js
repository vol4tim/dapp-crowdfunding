import React from 'react'

const notAccounts = function notAccounts() {
  return (<div>
    <header className="header-blue header-cols m-b-sec">
      <div className="header-blue-title">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 header-col-first">
              <h2 className="logo-icon-text logo-big">
                <img src="assets/img/aira-logo-w.svg" role="presentation" />
                <span>dApp AIRA</span>
              </h2>
            </div>
            <div className="col-md-6 col-sm-6">
              <h2>AIR token distribution phase 1</h2>
            </div>
            <div className="col-md-3 col-sm-3 header-col-last">
              <h2>1 ETH = 150 AIR</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="header-blue-content">
        <div className="container" />
      </div>
    </header>
    <div className="container m-b-sec">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6 box">
          <h2>Buy AIR tokens</h2>
          <form className="t-center">
            <div className="form-group">
              <label className="control-label">Your account: </label>
              <p>
                Account not found. Please, switch on your client:&nbsp;
                <a href="https://metamask.io" target="_blank">
                  <span style={{ textDecoration: 'underline' }}>Metamask</span>
                </a>, or&nbsp;
                <a href="https://parity.io" target="_blank">
                  <span style={{ textDecoration: 'underline' }}>Parity</span>
                </a>,
                or&nbsp;
                <a href="https://github.com/ethereum/mist" target="_blank"><span style={{ textDecoration: 'underline' }}>Mist</span> </a> </p>
            </div>
            <div className="form-group">
              <label className="control-label">Enter the amont of ETH that you would like to buy with:</label>
              <div className="input-group">
                <input className="form-control" type="text" value="1" style={{ width: 100 }} /><span className="input-group-addon">ETH </span></div>
            </div>
            <div className="form-group">
              <label className="control-label">You will receive: </label>
              <p className="t-big">75 000 AIR</p>
            </div>
            <label className="control-label">By buying AIR tokens, you agree to <a href="/#" target="_blank">TERMS OF USE</a></label>
            <div className="t-center">
              <button className="btn btn-primary" type="button" disabled="disabled">Buy tokens</button>
            </div>
          </form>
        </div>
        <div className="col-md-3" />
      </div>
    </div>
    <div className="statusbar"><span>Cant syncing, check your account</span></div>
    <footer className="footer">
      <div className="t-center"><a href="mailto:help@aira.life" className="t-mid">help@aira.life </a></div>
    </footer>
  </div>)
}

export default notAccounts
