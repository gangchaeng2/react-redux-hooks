import { all } from 'redux-saga/effects'

import { watchCountAsync } from './counter'

export default function* rootSaga() {
  yield all([
    watchCountAsync(),
  ])
}