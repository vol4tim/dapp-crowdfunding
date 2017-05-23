import React from 'react'

export default function notAccounts() {
  return (
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
  )
}
