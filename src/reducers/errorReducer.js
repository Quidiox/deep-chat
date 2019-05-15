import produce from 'immer'
import {
  USER_LOGIN_ERROR,
  USER_CREATE_ERROR,
  USER_EDIT_ERROR,
  USER_DELETE_ERROR,
  CLEAR_ERROR
} from './actionTypes'

const errorReducer = produce((draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case USER_LOGIN_ERROR: {
      return action.payload.response && action.payload.response.data
        ? action.payload.response.data.error
        : 'login failed'
    }
    case USER_CREATE_ERROR: {
      return action.payload.response && action.payload.response.data
        ? action.payload.response.data.error
        : 'create user failed'
    }
    case USER_EDIT_ERROR: {
      return action.payload.response && action.payload.response.data
        ? action.payload.response.data.error
        : 'edit user failed'
    }
    case USER_DELETE_ERROR: {
      return action.payload.response && action.payload.response.data
        ? action.payload.response.data.error
        : 'delete user failed'
    }
    case CLEAR_ERROR: {
      return ''
    }
  }
}, '')

export const clearError = () => ({
  type: CLEAR_ERROR
})

export default errorReducer
