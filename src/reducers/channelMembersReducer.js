import produce from 'immer'
import {
  LOAD_CHANNEL_MEMBERS_REQUEST,
  LOAD_CHANNEL_MEMBERS
} from './actionTypes'

const channelMembersReducer = produce((draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case LOAD_CHANNEL_MEMBERS: {
      if (action.payload.members.error) return
      draft[action.payload.channelId] = action.payload.members
      return
    }
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
}, {})

export const requestLoadChannelMembers = payload => ({
  type: LOAD_CHANNEL_MEMBERS_REQUEST,
  payload
})

export default channelMembersReducer
