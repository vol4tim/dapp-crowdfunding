import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadModule } from '../../../modules/crowdfunding/actions';
import { Main } from '../components/main';

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
  return {
    ...state.crowdfunding,
    numBlock: state.app.numBlock
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
