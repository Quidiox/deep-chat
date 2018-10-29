import { call, put, takeLatest } from 'redux-saga/effects'
import authApiService from '../api/authenticationApi'
import userApiService from '../api/userApi'
import { genericActionCreator } from '../reducers/rootReducer'
import {
  USER_LOGIN,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGOUT_REQUEST,
  USER_CREATE,
  USER_CREATE_REQUEST
} from '../reducers/actionTypes'

function* login(action) {
  try {
    const user = yield call(authApiService.login, action.payload)
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

function* createUser(action) {
  try {
    const user = yield call(userApiService.create, action.payload)
    yield put(genericActionCreator(USER_CREATE, user))
  } catch (error) {
    console.log(error)
  }
}

function* watchCreateUser() {
  yield takeLatest(USER_CREATE_REQUEST, createUser)
}

export const userSagas = [
  call(watchLogin),
  call(watchLogout),
  call(watchCreateUser)
]
