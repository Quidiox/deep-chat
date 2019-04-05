import produce from 'immer'
import {
  USER_LOGIN_ERROR,
  USER_CREATE_ERROR,
  USER_EDIT_ERROR,
  USER_DELETE_ERROR
} from './actionTypes'

const errorReducer = produce((draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case USER_LOGIN_ERROR: {
      return action.payload.response.data
    }
    case USER_CREATE_ERROR: {
      return action.payload.response.data
    }
    case USER_EDIT_ERROR: {
      return action.payload.response.data
    }
    case USER_DELETE_ERROR: {
      return action.payload.response.data
    }
  }
}, '')

export default errorReducer
