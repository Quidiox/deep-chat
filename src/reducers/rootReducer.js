import { combineReducers } from 'redux'
import userReducer from './userReducer'
import { USER_DELETE, USER_LOGOUT, USER_EDIT_ERROR } from './actionTypes'

const appReducer = combineReducers({ user: userReducer })

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined
  } else if (action.type === USER_DELETE) {
    state = undefined
  } else if (action.type === USER_EDIT_ERROR) {
    console.log(action)
  }

  return appReducer(state, action)
}

export const genericActionCreator = (type, payload) => ({
  type,
  payload
})

export default rootReducer
