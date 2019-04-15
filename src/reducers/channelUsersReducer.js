import produce from 'immer'
import { LOAD_CHANNEL_USERS_REQUEST, LOAD_CHANNEL_USERS } from './actionTypes'

const channelUsersReducer = produce((draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case LOAD_CHANNEL_USERS: {
      return action.payload
    }
  }
}, [])

export const requestLoadChannelUsers = payload => ({
  type: LOAD_CHANNEL_USERS_REQUEST,
  payload
})

export default channelUsersReducer
