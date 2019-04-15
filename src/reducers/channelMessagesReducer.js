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
      draft[action.payload.channelId].messages.push(action.payload.message)
      return
    }
    case LOAD_CHANNEL_MESSAGES: {
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
