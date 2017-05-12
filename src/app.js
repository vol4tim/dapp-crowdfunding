import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import configureStore from './config/store'
import { routes } from './config/routes'
import hett from './utils/hett'
import abis from './config/abi'

hett.init(web3, abis);

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes(store)} />
  </Provider>,
  document.getElementById('root')
)
