import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Main } from '../components/addBalance';
import { addBalance } from '../../../modules/crowdfunding/actions';
import hett from '../../../utils/hett';

function mapStateToProps(state) {
  const R = state.crowdfunding.config.startRatio
  const B = state.crowdfunding.config.startBlock;
  const S = state.crowdfunding.config.reductionStep;
  const V = state.crowdfunding.config.reductionValue;
  const price = R - (((state.app.numBlock - B) / S) * V);
  return {
    account: hett.web3h.coinbase(),
    address: state.crowdfunding.address,
    balance: state.crowdfunding.balanceEth,
    limitEth: Number(hett.web3.fromWei(
      state.crowdfunding.config.maxValue - state.crowdfunding.totalFunded, 'ether'
    )),
    balanceAir: state.crowdfunding.balanceAir,
    price,
    numBlock: state.app.numBlock,
    startBlock: state.crowdfunding.config.startBlock,
  }
}
function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    addBalance
  }, dispatch)
  return {
    onSubmit: actions.addBalance
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
