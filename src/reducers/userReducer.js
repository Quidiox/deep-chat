import produce from 'immer'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN,
  USER_VERIFY_REQUEST,
  USER_VERIFY,
  USER_CREATE_REQUEST,
  USER_CREATE,
  USER_EDIT_REQUEST,
  USER_EDIT,
  USER_LOGOUT_REQUEST,
  USER_DELETE_REQUEST
} from './actionTypes'
/* user logout and delete are handled in rootReducer because all state becomes
   invalid when they happen so whole state is set to undefined */

const userReducer = produce((draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case USER_LOGIN: {
      return action.payload
    }
    case USER_VERIFY: {
      return action.payload
    }
    case USER_CREATE: {
      return action.payload
    }
    case USER_EDIT: {
      return action.payload
    }
  }
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
