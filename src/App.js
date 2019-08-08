import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'
import rootSaga from './modules/sagas'

import { Counter } from './containers'

const store = configureStore()
store.runSaga(rootSaga)

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
