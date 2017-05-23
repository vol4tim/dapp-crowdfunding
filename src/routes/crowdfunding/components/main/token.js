import React from 'react'
import EthLink from '../../../../shared/components/common/ethLink'

const Main = props => (
  (
    <div className="container m-b-sec">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <h2>AIR token info </h2>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>ICO contract</td>
                  <td><EthLink address={props.ico} /></td>
                </tr>
                <tr>
                  <td>AIR token address </td>
                  <td><EthLink address={props.bounty} type="token" /></td>
                </tr>
                <tr>
                  <td>Token Total Supply </td>
                  <td>{props.totalSupply} AIR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-3" />
      </div>
    </div>
  )
)

export default Main
