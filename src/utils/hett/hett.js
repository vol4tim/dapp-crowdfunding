import _ from 'lodash'
import * as web3h from './web3h'
import Contract from './contract'
import Watcher from './watcher'

class Hett {
  constructor() {
    this.web3 = null;
    this.abis = {};
    this.web3h = web3h;
    this.watcher = null;
  }

  init(web3, abis = {}) {
    this.web3 = web3;
    this.abis = abis;
    this.web3h = web3h;
    this.watcher = new Watcher(web3);
  }

  getContract(abi, address) {
    return new Contract(this.web3.eth.contract(abi).at(address))
  }

  getAbiByName(name) {
    return new Promise((resolve, reject) => {
      if (_.has(this.abis, name)) {
        resolve(this.abis[name]);
      }
      reject(Error('Not found ABI. ' + name));
    });
  }

  getContractByName(name, address) {
    return this.getAbiByName(name)
      .then(abi => this.getContract(abi, address))
  }
}

export default new Hett()
