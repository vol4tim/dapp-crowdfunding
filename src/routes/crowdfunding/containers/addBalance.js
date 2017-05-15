import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Main } from '../components/addBalance';
import { addBalance } from '../../../modules/crowdfunding/actions';
import hett from '../../../utils/hett';

function mapStateToProps(state) {
  return {
    account: hett.web3h.coinbase(),
    address: state.crowdfunding.address,
    balance: state.crowdfunding.balanceEth
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
