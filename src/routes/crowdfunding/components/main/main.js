import React from 'react'
import AddBalance from '../../containers/addBalance'
import Token from './token'
import DistributionInfo from './distributionInfo'
import DistributionProgress from './distributionProgress'

const Main = props => (
  (
    <div>
      <AddBalance />
      <Token ico={props.address} bounty={props.bounty} totalSupply={props.totalSupply} />
      <DistributionInfo />
      <DistributionProgress {...props} />
    </div>
  )
)

export default Main
