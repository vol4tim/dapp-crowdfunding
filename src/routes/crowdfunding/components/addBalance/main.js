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
      <div className="container m-b-sec">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6 box">
            <h2>Buy AIR tokens</h2>
            {this.props.startBlock <= this.props.numBlock &&
              <form className="t-center" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="control-label">Your account: </label>
                  <p>
                    <EthLink address={this.props.account} style={{ textDecoration: 'underline' }} />
                    <span className="m-l-10 d-b">{(this.props.balance < 0.001) ? this.props.balance : this.props.balance.toFixed(3)} ETH , {this.props.balanceAir} AIR</span>
                  </p>
                </div>
                <div className="form-group">
                  <label className="control-label">Enter the amont of ETH that you would like to buy with:</label>
                  <div className="input-group">
                    <input value={this.state.value} onChange={this.handleChange} name="value" type="text" className="form-control" style={{ width: 100 }} />
                    <span className="input-group-addon">ETH </span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">You will receive: </label>
                  <p className="t-big">{this.state.air} AIR</p>
                </div>
                <label className="control-label">By buying AIR tokens, you agree to <a href="/#" target="_blank">TERMS OF USE</a></label>
                <div className="t-center">
                  <button className="btn btn-primary" type="submit" disabled={this.state.error !== ''}>Buy tokens</button>
                </div>
              </form>
            }
            {this.state.error !== '' &&
              <div className="alert alert-danger text-center" role="alert">
                <span>{this.state.error}</span>
              </div>
            }
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default Main
