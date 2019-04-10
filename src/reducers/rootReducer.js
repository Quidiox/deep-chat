import { combineReducers } from 'redux'
import userReducer from './userReducer'
import errorReducer from './errorReducer'
import channelReducer from './channelReducer'
import { USER_DELETE, USER_LOGOUT } from './actionTypes'

const appReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  channels: channelReducer
})

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined
  } else if (action.type === USER_DELETE) {
    state = undefined
  }

  return appReducer(state, action)
}

export const genericActionCreator = (type, payload) => ({
  type,
  payload
})

export default rootReducer
