import { call, put, takeLatest } from 'redux-saga/effects'
import authApiService from '../api/authenticationApi'
import userApiService from '../api/userApi'
import { genericActionCreator } from '../reducers/rootReducer'
import {
  USER_LOGIN,
  USER_LOGIN_REQUEST,
  USER_LOGIN_ERROR,
  USER_LOGOUT,
  USER_LOGOUT_REQUEST,
  USER_CREATE,
  USER_CREATE_REQUEST,
  USER_CREATE_ERROR,
  USER_DELETE,
  USER_DELETE_REQUEST,
  USER_DELETE_ERROR,
  USER_EDIT,
  USER_EDIT_REQUEST,
  USER_EDIT_ERROR
} from '../reducers/actionTypes'

function* login(action) {
  try {
    const user = yield call(authApiService.login, action.payload)
    yield put(genericActionCreator(USER_LOGIN, user))
  } catch (error) {
    console.log(error)
    yield put(genericActionCreator(USER_LOGIN_ERROR, error))
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
    yield put(genericActionCreator(USER_CREATE_ERROR, error))
  }
}

function* watchCreateUser() {
  yield takeLatest(USER_CREATE_REQUEST, createUser)
}

function* editUser(action) {
  try {
    const user = yield call(userApiService.edit, action.payload)
    yield put(genericActionCreator(USER_EDIT, user))
  } catch (error) {
    console.log(error)
    yield put(genericActionCreator(USER_EDIT_ERROR, error))
  }
}

function* watchEditUser() {
  yield takeLatest(USER_EDIT_REQUEST, editUser)
}

function* deleteUser(action) {
  try {
    yield call(userApiService.remove, action.payload)
    yield put(genericActionCreator(USER_DELETE))
  } catch (error) {
    console.log(error)
    yield put(genericActionCreator(USER_DELETE_ERROR, error))
  }
}

function* watchDeleteUser() {
  yield takeLatest(USER_DELETE_REQUEST, deleteUser)
}

export const userSagas = [
  call(watchLogin),
  call(watchLogout),
  call(watchCreateUser),
  call(watchEditUser),
  call(watchDeleteUser)
]
