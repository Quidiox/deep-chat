import { combineReducers } from 'redux'
import userReducer from './userReducer'
import errorReducer from './errorReducer'
import channelsReducer from './channelsReducer'
import channelMessagesReducer from './channelMessagesReducer'
import channelMembersReducer from './channelMembersReducer'
import { USER_DELETE, USER_LOGOUT, AUTH_COOKIE_NOT_VALID } from './actionTypes'

const appReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  channels: channelsReducer,
  messages: channelMessagesReducer,
  members: channelMembersReducer
})

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined
  } else if (action.type === USER_DELETE) {
    state = undefined
  } else if (action.type === AUTH_COOKIE_NOT_VALID) {
    state = undefined
  }

  return appReducer(state, action)
}

export const genericActionCreator = (type, payload) => ({
  type,
  payload
})

export default rootReducer
