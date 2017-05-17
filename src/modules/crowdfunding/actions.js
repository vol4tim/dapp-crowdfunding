import Promise from 'bluebird'
import { START_LOAD, LOAD_MODULE } from './actionTypes'
import hett from '../../utils/hett'
import { flashMessage } from '../app/actions'

export function loadModule(address) {
  return (dispatch) => {
    dispatch({
      type: START_LOAD
    })
    let payload;
    hett.getContractByName('Crowdfunding', address)
      .then(contract => (
        Promise.join(
          contract.call('fund'),
          contract.call('bounty'),
          contract.call('totalFunded'),
          contract.call('reference'),
          contract.call('config'),
          hett.web3h.getBalance(hett.web3h.coinbase()),
          (fund, bounty, totalFunded, reference, config, balanceEth) => (
            {
              fund,
              bounty,
              totalFunded: Number(totalFunded),
              reference,
              config: {
                startBlock: Number(config[0]),
                stopBlock: Number(config[1]),
                minValue: Number(config[2]),
                maxValue: Number(config[3]),
                bountyScale: Number(config[4]),
                startRatio: Number(config[5]),
                reductionStep: Number(config[6]),
                reductionValue: Number(config[7])
              },
              balanceEth
            }
          )
        )
      ))
      .then((info) => {
        payload = info
        return hett.getContractByName('TokenEmission', info.bounty)
      })
      .then(contract => (
        Promise.join(
          contract.call('balanceOf', [hett.web3h.coinbase()]),
          contract.call('totalSupply'),
          (balance, totalSupply) => (
            {
              balanceAir: Number(balance),
              totalSupply: Number(totalSupply)
            }
          )
        )
      ))
      .then((token) => {
        dispatch({
          type: LOAD_MODULE,
          payload: {
            ...payload,
            ...token
          }
        })
        hett.watcher.addAddress(address, 'loadModule', () => {
          dispatch(loadModule(address));
        })
      })
      // .then(contract => contract.call('balanceOf', [hett.web3h.coinbase()]))
      // .then((balance) => {
      //   dispatch({
      //     type: LOAD_MODULE,
      //     payload: {
      //       ...payload,
      //       balanceAir: Number(balance)
      //     }
      //   })
      //   hett.watcher.addAddress(address, 'loadModule', () => {
      //     dispatch(loadModule(address));
      //   })
      // })
  }
}

export function addBalance(address, value) {
  return (dispatch) => {
    hett.web3h.transfer(hett.web3h.coinbase(), address, value.value)
      .then((txId) => {
        dispatch(flashMessage('txId: ' + txId))
        return hett.watcher.addTx(txId)
      })
      .then((transaction) => {
        dispatch(flashMessage('blockNumber: ' + transaction.blockNumber))
        return transaction;
      })
      .catch((e) => {
        dispatch(flashMessage('Error transaction', 'error'))
        console.log(e);
        // dispatch(stopSubmit(formName))
        return Promise.reject();
      })
  }
}
