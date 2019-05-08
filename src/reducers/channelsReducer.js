import produce from 'immer'
import {
  USER_JOIN_CHANNEL_REQUEST,
  USER_JOIN_CHANNEL,
  USER_LEAVE_CHANNEL_REQUEST,
  USER_LEAVE_CHANNEL,
  LOAD_ALL_CHANNELS_REQUEST,
  LOAD_ALL_CHANNELS
} from './actionTypes'

const channelReducer = produce((draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case LOAD_ALL_CHANNELS: {
      return action.payload
    }
    case USER_JOIN_CHANNEL: {
      if (action.payload.notice) return
      draft.push(action.payload)
      return
    }
    case USER_LEAVE_CHANNEL: {
      if (action.payload.notice) return
      return draft.filter(channel => channel.id !== action.payload.id)
    }
  }
}, [])

export const requestUserJoinChannel = payload => ({
  type: USER_JOIN_CHANNEL_REQUEST,
  payload
})

export const requestUserLeaveChannel = payload => ({
  type: USER_LEAVE_CHANNEL_REQUEST,
  payload
})

export const requestLoadAllChannels = () => ({
  type: LOAD_ALL_CHANNELS_REQUEST
})

export default channelReducer
