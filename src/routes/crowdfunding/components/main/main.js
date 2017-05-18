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
              <td>10,000 eth</td>
            </tr>
            <tr>
              <td>Air token max supply:</td>
              <td>1,000,000.00 air</td>
            </tr>
            <tr>
              <td>Amount of tokens for one tx presale:</td>
              <td>175,000 air</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-6">
        <table className="table">
          <tbody>
            <tr>
              <td>Foundation</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Founders</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>Aira network token price phase 1 (eth / air)</td>
              <td>75 air</td>
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
      <div className="col-md-6">
        <p>Token Air: <EthLink address={props.bounty} type="token" /></p>
        <p>Token Total Supply: <b>{props.totalSupply} AIR</b></p>
        <p>Your Air balance: <b>{props.balanceAir} AIR</b></p>
      </div>
    </div>
    <hr />
    <h2>Time</h2>
    <p>Current block: {props.numBlock}</p>
    <div className="row">
      <div className="col-md-2">
        Start block {props.config.startBlock}
      </div>
      <div className="col-md-8">
        {props.config.startBlock <= props.numBlock ?
          <div>
            <Progress completed={(props.timePercent <= 100) ? props.timePercent : 100} />
            {(props.timePercent <= 100) ? props.timePercent : 100}%
          </div>
          :
          <p className="text-center text-warning"><b>Before the beginning there are {props.config.startBlock - props.numBlock} blocks left</b></p>
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
            <Progress completed={(props.balancePercent <= 100) ? props.balancePercent : 100} />
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
