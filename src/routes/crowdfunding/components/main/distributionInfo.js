import React from 'react'

const Main = () => (
  (
    <div className="container m-b-sec">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <h2>Token distribution info </h2>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>Ether collection limit </td>
                  <td>10 000 ETH</td>
                </tr>
                <tr>
                  <td>Air token max supply </td>
                  <td>1 000 000 AIR</td>
                </tr>
                <tr>
                  <td>Amount of tokens for one tx presale </td>
                  <td>175 000 AIR</td>
                </tr>
                <tr>
                  <td>Foundation </td>
                  <td>10% </td>
                </tr>
                <tr>
                  <td>Founders </td>
                  <td>15% </td>
                </tr>
                <tr>
                  <td>Aira network token price phase 1 (eth / air) </td>
                  <td>150 AIR</td>
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
