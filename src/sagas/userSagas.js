import { call, put, takeLatest } from 'redux-saga/effects'
import apiService from '../api/authenticationApi'
import { genericActionCreator } from '../reducers/rootReducer'
import {
  USER_LOGIN,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGOUT_REQUEST
} from '../reducers/actionTypes'

function* login(action) {
  try {
    const user = yield call(apiService.login, action.payload)
    yield put(genericActionCreator(USER_LOGIN, user))
  } catch (error) {
    console.log(error)
  }
}

function* watchLogin() {
  yield takeLatest(USER_LOGIN_REQUEST, login)
}

function* logout() {
  try {
    yield put(genericActionCreator(USER_LOGOUT))
  } catch (error) {
    console.log(error)
  }
}

function* watchLogout() {
  yield takeLatest(USER_LOGOUT_REQUEST, logout)
}

export const userSagas = [call(watchLogin), call(watchLogout)]
