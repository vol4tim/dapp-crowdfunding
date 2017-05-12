import { SET_DAO_ADDRESS, SET_NUM_BLOCK, FLASH_MESSAGE } from './actionTypes'

const initialState = {
  title: 'dApp',
  flash_message: '',
  numBlock: 0,
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case FLASH_MESSAGE:
      return { ...state, flash_message: action.payload }

    case SET_DAO_ADDRESS:
      return { ...state, dao_address: action.payload }

    case SET_NUM_BLOCK:
      return { ...state, numBlock: action.payload }

    default:
      return state;
  }
}
