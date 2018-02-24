import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configStore'

import '../styles/styles.scss'
import App from './App'

export default props => {
  /* Get initialstate */
  const initialState = {}
  const store = configureStore(initialState)
  return (
    <Provider store={store} key='provider'>
      <App {...props} />
    </Provider>
  )
}
