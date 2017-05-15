import React from 'react'
import Progress from './progress'
import AddBalance from '../../containers/addBalance'

const Main = props => (
  (<div>
    <h1>address: {props.address}</h1>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <AddBalance />
      </div>
      <div className="col-md-6 text-center">
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
