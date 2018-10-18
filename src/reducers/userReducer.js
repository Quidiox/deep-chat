import {
  USER_CREATE,
  USER_EDIT,
  USER_DELETE,
  USER_LOGIN,
  USER_VERIFY
} from './actionTypes'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload
    case USER_VERIFY:
      return action.payload
    case USER_CREATE:
      return action.payload
    case USER_EDIT:
      return state
    case USER_DELETE:
      return state
    default:
      return state
  }
}

export default userReducer
