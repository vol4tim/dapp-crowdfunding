import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadModule } from '../../../modules/crowdfunding/actions';
import { Main } from '../components/main';
import hett from '../../../utils/hett'

class Container extends Component {
  componentWillMount() {
    this.props.loadModule(this.props.address);
  }
  render() {
    let element;
    if (!this.props.isLoad) {
      element = <Main {...this.props} />
    } else {
      element = <p>...</p>
    }
    return (<div>
      {element}
    </div>)
  }
}

function mapStateToProps(state) {
  const timePercent = Math.ceil(
    (100 *
    (state.app.numBlock - state.crowdfunding.config.startBlock)) /
    (state.crowdfunding.config.stopBlock - state.crowdfunding.config.startBlock)
  )
  const balancePercent = Math.ceil(
    (100 *
    (state.crowdfunding.totalFunded - state.crowdfunding.config.minValue)) /
    (state.crowdfunding.config.maxValue - state.crowdfunding.config.minValue)
  )
  return {
    ...state.crowdfunding,
    numBlock: state.app.numBlock,
    totalFundedEth: Number(hett.web3.fromWei(state.crowdfunding.totalFunded, 'ether')),
    minValueEth: Number(hett.web3.fromWei(state.crowdfunding.config.minValue, 'ether')),
    maxValueEth: Number(hett.web3.fromWei(state.crowdfunding.config.maxValue, 'ether')),
    timePercent,
    balancePercent
  }
}
function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    loadModule
  }, dispatch)
  return {
    loadModule: actions.loadModule
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
