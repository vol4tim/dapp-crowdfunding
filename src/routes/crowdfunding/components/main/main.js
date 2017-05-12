import React from 'react'
import Progress from './progress'
import AddBalance from '../../containers/addBalance'

const Main = props => (
  (<div>
    <h1>address: {props.address}</h1>
    <hr />
    <AddBalance />
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
            <Progress
              completed={
                Math.ceil(
                  (props.numBlock * 100) / (props.config.stopBlock - props.config.startBlock)
                )
              }
            />
            {Math.ceil((props.numBlock * 100) / (props.config.stopBlock - props.config.startBlock))}
            %
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
            <Progress
              completed={
                Math.ceil(
                  (props.totalFunded * 100) / (props.config.maxValue - props.config.minValue)
                )
              }
            />
            {props.totalFundedEth} ETH =
            &nbsp;
            {Math.ceil((props.totalFunded * 100) / (props.config.maxValue - props.config.minValue))}
            %
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
