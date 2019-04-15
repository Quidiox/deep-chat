import { combineReducers } from 'redux'
import userReducer from './userReducer'
import errorReducer from './errorReducer'
import channelsReducer from './channelsReducer'
import channelMessagesReducer from './channelMessagesReducer'
import channelUsersReducer from './channelUsersReducer'
import { USER_DELETE, USER_LOGOUT } from './actionTypes'

const appReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  channelTabs: channelsReducer,
  messages: channelMessagesReducer,
  users: channelUsersReducer
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
