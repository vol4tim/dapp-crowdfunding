import React from 'react'
import Progress from './progress'
import AddBalance from '../../containers/addBalance'
import EthLink from '../../../../shared/components/common/ethLink'

const Main = props => (
  (<div>
    <h1>Token distribution phase 1</h1>
    <h2><EthLink address={props.address} /></h2>
    <div className="row">
      <div className="col-md-6">
        <table className="table">
          <tbody>
            <tr>
              <td>Limit of collect ether:</td>
              <td>5,000 eth</td>
            </tr>
            <tr>
              <td>Max supply:</td>
              <td>1,000,000.00 air</td>
            </tr>
            <tr>
              <td>Cybernator total invested:</td>
              <td>2,000 eth</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-6">
        <table className="table">
          <tbody>
            <tr>
              <td>Foundation</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>Founders</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Price per one token</td>
              <td>$0.60</td>
            </tr>
            <tr>
              <td>Cap in USD</td>
              <td>$600,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <AddBalance />
      </div>
      <div className="col-md-6 text-center">
        Token Air <EthLink address={props.address} /><br />
        Your Air balance: <b>{props.balanceAir} AIR</b>
      </div>
    </div>
    <hr />
    <h2>Time</h2>
    <p>current block: {props.numBlock}</p>
    <div className="row">
      <div className="col-md-2">
        Start block {props.config.startBlock}
      </div>
      <div className="col-md-8">
        {props.config.startBlock <= props.numBlock ?
          <div>
            <Progress completed={(props.timePercent < 100) ? props.timePercent : 100} />
            {props.timePercent}%
          </div>
          :
          <p>начало через {props.config.startBlock - props.numBlock} блока</p>
        }
      </div>
      <div className="col-md-2">
        Finish block {props.config.stopBlock}
      </div>
    </div>
    <hr />
    <h2>Balance</h2>
    <div className="row">
      <div className="col-md-2">
        Min {props.minValueEth} ETH
      </div>
      <div className="col-md-8">
        {props.totalFunded >= props.config.minValue ?
          <div>
            <Progress completed={(props.balancePercent < 100) ? props.balancePercent : 100} />
            {props.totalFundedEth} ETH = {props.balancePercent}%
          </div>
          :
          <div>
            <Progress
              completed="0"
            />
            {props.totalFundedEth} ETH = 0%
          </div>
        }
      </div>
      <div className="col-md-2">
        Max {props.maxValueEth} ETH
      </div>
    </div>
  </div>)
)

export default Main
