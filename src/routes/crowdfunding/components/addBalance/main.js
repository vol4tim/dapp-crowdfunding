import React, { Component } from 'react'
import _ from 'lodash'
import EthLink from '../../../../shared/components/common/ethLink'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      error: '',
      air: 1 * props.price
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    this.setState({ error: '' });
    const value = Number(this.state.value)
    const balance = Number(this.props.balance)
    if (value > 0 && balance >= value && value <= this.props.limitEth) {
      return true;
    }
    let error;
    if (this.state.value === '') {
      error = 'Amount required'
    } else if (value <= 0) {
      error = 'Amount is incorrect'
    } else if (balance < value) {
      error = 'Not enough funds on account'
    } else if (value > this.props.limitEth) {
      error = 'Specified a large amount'
    }
    this.setState({ error });
    return false;
  }

  handleChange(event) {
    this.setState({ error: '' });
    this.setState({ air: 0 });
    let value = event.target.value;
    if (event.target.name === 'value' && event.target.value !== '') {
      if (!_.isNaN(Number(event.target.value))) {
        value = Number(event.target.value);
        this.setState({ air: value * this.props.price });
      }
    }
    this.setState({ [event.target.name]: value });
  }

  handleSubmit(event) {
    if (this.validate()) {
      this.props.onSubmit(this.props.address, this.state);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>Your account: <EthLink address={this.props.account} /></p>
        <p>Your Ether balance: <b>{this.props.balance} ETH</b></p>
        {this.props.startBlock <= this.props.numBlock &&
          <div>
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="sr-only">Amount (in dollars)</label>
                <div className="input-group">
                  <input value={this.state.value} onChange={this.handleChange} name="value" type="text" className="form-control form-control-b" />
                  <div className="input-group-addon">ETH</div>
                </div>
              </div>
              &nbsp;
              <button type="submit" className="btn btn-default" disabled={this.state.error !== ''}>Supply</button>
            </form>
            {this.state.error !== '' &&
              <div className="alert alert-danger">{this.state.error}</div>
            }
            <p>You will receive: <b>{this.state.air} AIR</b></p>
          </div>
        }
      </div>
    );
  }
}

export default Main
