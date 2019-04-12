import produce from 'immer'
import {
  USER_JOIN_CHANNEL_REQUEST,
  USER_JOIN_CHANNEL,
  USER_LEAVE_CHANNEL_REQUEST,
  USER_LEAVE_CHANNEL,
  NEW_MESSAGE_REQUEST,
  NEW_MESSAGE,
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
      if (action.payload.error) return
      draft.push(action.payload)
      return
    }
    case USER_LEAVE_CHANNEL: {
      return action.payload
    }
    case NEW_MESSAGE: {
      return action.payload
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

export const requestNewMessage = payload => ({
  type: NEW_MESSAGE_REQUEST,
  payload
})

export const requestLoadAllChannels = () => ({
  type: LOAD_ALL_CHANNELS_REQUEST
})

export default channelReducer
