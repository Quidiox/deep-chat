import produce from 'immer'
import { LOAD_CHANNEL_USERS_REQUEST, LOAD_CHANNEL_USERS } from './actionTypes'

const channelUsersReducer = produce((draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case LOAD_CHANNEL_USERS: {
      draft[action.payload.channelId] = action.payload.users
      return
    }
    // no actiontype yet for these:
    // when user is active on channel his color should be different than when he is not.
    // a new action needed for this too
    //
    // when new users joins chatroom there is a need to emit it to everyone in the room
    // case USER_JOINED: {
    //   if (draft[action.payload.channelId]) {
    //     draft[action.payload.channelId].push(action.payload.users)
    //     return
    //   }
    //   draft[action.payload.channelId] = [action.payload.users]
    //   return
    // }
  }
}, [])

export const requestLoadChannelUsers = payload => ({
  type: LOAD_CHANNEL_USERS_REQUEST,
  payload
})

export default channelUsersReducer
