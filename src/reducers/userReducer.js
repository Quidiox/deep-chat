import produce from 'immer'
import {
  USER_LOGIN_REQUEST,
  USER_VERIFY_REQUEST,
  USER_CREATE_REQUEST,
  USER_EDIT_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_DELETE_REQUEST
} from './actionTypes'

const userReducer = produce((draft, action) => {
  return action.payload
}, {})

export const requestLoginUser = payload => ({
  type: USER_LOGIN_REQUEST,
  payload
})

export const requestLogoutUser = () => ({
  type: USER_LOGOUT_REQUEST
})

export const requestVerifyUserToken = payload => ({
  type: USER_VERIFY_REQUEST,
  payload
})

export const requestCreateUser = payload => ({
  type: USER_CREATE_REQUEST,
  payload
})

export const requestEditUser = payload => ({
  type: USER_EDIT_REQUEST,
  payload
})

export const requestDeleteUser = payload => ({
  type: USER_DELETE_REQUEST,
  payload
})

export default userReducer
