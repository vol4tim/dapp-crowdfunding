import React from 'react'

const Header = function Header(props) {
  return (
    <header className="header-blue header-cols m-b-sec">
      <div className="header-blue-title">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 header-col-first">
              <h2 className="logo-icon-text logo-big">
                <img src="assets/img/aira-logo-w.svg" role="presentation" />
                <span>{props.title}</span>
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
  )
}

export default Header
