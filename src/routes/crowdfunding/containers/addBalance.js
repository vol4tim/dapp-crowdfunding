import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Main } from '../components/addBalance';
import { addBalance } from '../../../modules/crowdfunding/actions';

function mapStateToProps(state) {
  return {
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
