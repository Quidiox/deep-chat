import { all } from 'redux-saga/effects'
import { userSagas } from './userSagas'
import { channelSagas } from './channelSagas'

export default function* rootSaga() {
  yield all([...userSagas, ...channelSagas])
}
