import Notifications from 'react-notification-system-redux';
import { SET_DAO_ADDRESS, SET_NUM_BLOCK/* , FLASH_MESSAGE*/ } from './actionTypes'
import hett from '../../utils/hett'

export function upBlock() {
  return (dispatch) => {
    hett.watcher.addSubscribe((info) => {
      dispatch({
        type: SET_NUM_BLOCK,
        payload: info.number
      })
    });
    hett.web3.eth.getBlockNumber((error, result) => {
      dispatch({
        type: SET_NUM_BLOCK,
        payload: result
      })
    });
  }
}

export function setDaoAddress(address) {
  return {
    type: SET_DAO_ADDRESS,
    payload: address
  }
}

export function flashMessage(message, type = 'info') {
  return (dispatch) => {
    const notificationOpts = {
      // title: 'Hey, it\'s good to see you!',
      message,
      position: 'tr',
      autoDismiss: 10
    };
    if (type === 'error') {
      dispatch(Notifications.error(notificationOpts))
    } else {
      dispatch(Notifications.info(notificationOpts))
    }
  }
}
