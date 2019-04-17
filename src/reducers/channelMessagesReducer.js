import produce from 'immer'
import {
  NEW_MESSAGE_REQUEST,
  NEW_MESSAGE,
  LOAD_CHANNEL_MESSAGES_REQUEST,
  LOAD_CHANNEL_MESSAGES
} from './actionTypes'

const channelMessagesReducer = produce((draft, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case NEW_MESSAGE: {
      if (
        draft[action.payload.channelId] &&
        draft[action.payload.channelId].messages
      ) {
        draft[action.payload.channelId].messages.push(action.payload.message)
      } else {
        draft[action.payload.channelId].messages = []
        draft[action.payload.channelId].messages.push(action.payload.message)
      }
      // console.log(action.payload.message)
      return
    }
    case LOAD_CHANNEL_MESSAGES: {
      // console.log(action.payload.messages)
      // to prevent error message when user has not joined any channels yet.
      // if no channel is selected then requests should not be made
      if (action.payload.messages.error) return
      draft[action.payload.channelId] = action.payload.messages
      return
    }
  }
}, {})

export const requestNewMessage = payload => ({
  type: NEW_MESSAGE_REQUEST,
  payload
})

export const requestLoadChannelMessages = payload => ({
  type: LOAD_CHANNEL_MESSAGES_REQUEST,
  payload
})

export default channelMessagesReducer
