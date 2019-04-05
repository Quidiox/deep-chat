import { call, put, takeLatest } from 'redux-saga/effects'
import authApiService from '../api/authenticationApi'
import userApiService from '../api/userApi'
import { genericActionCreator } from '../reducers/rootReducer'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT,
  USER_LOGOUT_ERROR,
  USER_CREATE_REQUEST,
  USER_CREATE,
  USER_CREATE_ERROR,
  USER_EDIT_REQUEST,
  USER_EDIT,
  USER_EDIT_ERROR,
  USER_DELETE_REQUEST,
  USER_DELETE,
  USER_DELETE_ERROR,
  AUTH_COOKIE_VERIFY_REQUEST,
  AUTH_COOKIE_VERIFY,
  AUTH_COOKIE_NOT_VALID
} from '../reducers/actionTypes'

function* login(action) {
  try {
    const user = yield call(authApiService.login, action.payload)
    yield put(genericActionCreator(USER_LOGIN, user))
  } catch (error) {
    console.log(error)
    yield put(genericActionCreator(USER_LOGIN_ERROR, error.error))
  }
}

function* watchLogin() {
  yield takeLatest(USER_LOGIN_REQUEST, login)
}

function* logout(action) {
  try {
    yield call(authApiService.logout, action.payload)
    yield put(genericActionCreator(USER_LOGOUT))
  } catch (error) {
    console.log(error)
    yield put(genericActionCreator(USER_LOGOUT_ERROR, error.error))
  }
}

function* watchLogout() {
  yield takeLatest(USER_LOGOUT_REQUEST, logout)
}
// cookie is either valid or not, no error if it is not
function* authCookieVerify() {
  try {
    const user = yield call(authApiService.verifyAuthCookie)
    yield put(genericActionCreator(AUTH_COOKIE_VERIFY, user))
  } catch (error) {
    yield put(genericActionCreator(AUTH_COOKIE_NOT_VALID))
  }
}

function* watchAuthCookieVerify() {
  yield takeLatest(AUTH_COOKIE_VERIFY_REQUEST, authCookieVerify)
}

function* createUser(action) {
  try {
    const user = yield call(userApiService.create, action.payload)
    yield put(genericActionCreator(USER_CREATE, user))
  } catch (error) {
    console.log(error)
    yield put(genericActionCreator(USER_CREATE_ERROR, error.error))
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
    yield put(genericActionCreator(USER_EDIT_ERROR, error.error))
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
    yield put(genericActionCreator(USER_DELETE_ERROR, error.error))
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
  call(watchDeleteUser),
  call(watchAuthCookieVerify)
]
