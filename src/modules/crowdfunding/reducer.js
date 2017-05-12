import { START_LOAD, LOAD_MODULE } from './actionTypes'
import { CROWDFUNDING_ADDR } from '../../config/config'

const initialState = {
  balanceEth: 0,
  balanceAir: 0,
  address: CROWDFUNDING_ADDR,
  isLoad: false,
  fund: '',
  bounty: '',
  totalFunded: 0,
  reference: '',
  config: {
    startBlock: 0,
    stopBlock: 0,
    minValue: 0,
    maxValue: 0,
    bountyScale: 0,
    startRatio: 0,
    reductionStep: 0,
    reductionValue: 0
  }
}

export default function crowdfunding(state = initialState, action) {
  switch (action.type) {
    case START_LOAD: {
      return { ...state, isLoad: true }
    }

    case LOAD_MODULE: {
      return { ...state, ...action.payload, isLoad: false }
    }

    default:
      return state;
  }
}
