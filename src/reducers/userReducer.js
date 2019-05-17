import produce from 'immer'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN,
  USER_CREATE_REQUEST,
  USER_CREATE,
  USER_EDIT_REQUEST,
  USER_EDIT,
  USER_LOGOUT_REQUEST,
  USER_DELETE_REQUEST,
  AUTH_COOKIE_VERIFY_REQUEST,
  AUTH_COOKIE_VERIFY,
  USER_SET_ACTIVE_CHANNEL_REQUEST,
  USER_SET_ACTIVE_CHANNEL,
  USER_SET_LAST_VISIT_ON_CHANNEL_REQUEST,
  USER_SET_LAST_VISIT_ON_CHANNEL
} from './actionTypes'
/* user logout, user delete and invalid auth cookie are handled in rootReducer 
   because all state becomes invalid when they happen so whole state is set to 
   undefined */

const userReducer = produce((draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case USER_LOGIN: {
      return action.payload
    }
    case USER_CREATE: {
      return action.payload
    }
    case USER_EDIT: {
      return action.payload
    }
    case AUTH_COOKIE_VERIFY: {
      return action.payload
    }
    case USER_SET_ACTIVE_CHANNEL: {
      return action.payload
    }
    case USER_SET_LAST_VISIT_ON_CHANNEL: {
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

export const requestVerifyAuthCookie = () => ({
  type: AUTH_COOKIE_VERIFY_REQUEST
})

export const requestUserSetActiveChannel = payload => ({
  type: USER_SET_ACTIVE_CHANNEL_REQUEST,
  payload
})

export const requestUsetSetLastVisitOnChannel = payload => ({
  type: USER_SET_LAST_VISIT_ON_CHANNEL_REQUEST,
  payload
})

export default userReducer
