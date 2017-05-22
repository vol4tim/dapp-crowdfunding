import React from 'react'
import Progress from './progress'

const Main = props => (
  (
    <div className="container m-b-sec">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <h2>Token distribution progress </h2>
          <section>
            <p className="progressbar-title">Time </p>
            {props.config.startBlock <= props.numBlock ?
              <Progress completed={(props.timePercent <= 100) ? props.timePercent : 100} />
              :
              <p className="text-center text-warning"><b>Before the beginning there are {props.config.startBlock - props.numBlock} blocks left</b></p>
            }
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Current block </td>
                    <td>{props.numBlock}</td>
                  </tr>
                  <tr>
                    <td>Start block </td>
                    <td>{props.config.startBlock}</td>
                  </tr>
                  <tr>
                    <td>Finish block </td>
                    <td>{props.config.stopBlock}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <p className="progressbar-title">Balance </p>
            {props.totalFunded >= props.config.minValue ?
              <Progress completed={(props.balancePercent <= 100) ? props.balancePercent : 100} />
              :
              <Progress completed="0" />
            }
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Collected Ethers </td>
                    <td>{props.totalFundedEth} AIR</td>
                  </tr>
                  <tr>
                    <td>Ether collection limit</td>
                    <td>{props.maxValueEth} AIR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="col-md-3" />
      </div>
    </div>
  )
)

export default Main
