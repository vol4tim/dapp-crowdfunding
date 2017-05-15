import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Notifications from 'react-notification-system-redux';
import { upBlock } from '../../modules/app/actions';

import Header from '../components/app/header'
import Footer from '../components/app/footer'

import './style.css'

class App extends Component {
  componentWillMount() {
    this.props.upBlock();
  }

  render() {
    const style = {
      Containers: {
        DefaultStyle: {
          width: '530px',
        }
      },
      NotificationItem: {
        DefaultStyle: {
          margin: '10px 5px 2px 1px'
        },
      }
    };
    return (<div>
      <Header title={this.props.title} />
      <div className="container" id="maincontainer">
        {this.props.children}
      </div>
      <Footer />
      <Notifications
        notifications={this.props.notifications}
        style={style}
        allowHTML
      />
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    title: state.app.title,
    flash_message: state.app.flash_message,
    notifications: state.notifications
  }
}
function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    upBlock
  }, dispatch)
  return {
    upBlock: actions.upBlock
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
