import Notifications from 'react-notification-system-redux';
import { SET_DAO_ADDRESS, SET_NUM_BLOCK/* , FLASH_MESSAGE*/ } from './actionTypes'
import hett from '../../utils/hett'

export function upBlock() {
  return (dispatch) => {
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

export function flashMessage(message) {
  return (dispatch) => {
    const notificationOpts = {
      // title: 'Hey, it\'s good to see you!',
      message,
      position: 'tr',
      autoDismiss: 10
    };
    dispatch(Notifications.info(notificationOpts))
    // dispatch({
    //   type: FLASH_MESSAGE,
    //   payload: message
    // })
  }
}