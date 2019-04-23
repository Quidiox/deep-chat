import { take, put, call, apply, actionChannel } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import createWebSocketConnection from '../pages/chat/socketConnection'
import { genericActionCreator } from '../reducers/rootReducer'
import {
  USER_JOIN_CHANNEL_REQUEST,
  USER_JOIN_CHANNEL_RESPONSE,
  USER_JOIN_CHANNEL,
  USER_LEAVE_CHANNEL_REQUEST,
  USER_LEAVE_CHANNEL_RESPONSE,
  USER_LEAVE_CHANNEL,
  LOAD_ALL_CHANNELS_REQUEST,
  LOAD_ALL_CHANNELS_RESPONSE,
  LOAD_ALL_CHANNELS,
  NEW_MESSAGE_REQUEST,
  NEW_MESSAGE_RESPONSE,
  NEW_MESSAGE,
  LOAD_CHANNEL_MESSAGES_REQUEST,
  LOAD_CHANNEL_MESSAGES_RESPONSE,
  LOAD_CHANNEL_MESSAGES,
  LOAD_CHANNEL_MEMBERS_REQUEST,
  LOAD_CHANNEL_MEMBERS_RESPONSE,
  LOAD_CHANNEL_MEMBERS
} from '../reducers/actionTypes'

let socket

function createSocketChannel(socket) {
  return eventChannel(emit => {
    const loadAllChannelsHandler = event => {
      emit(event)
    }
    const userJoinChannelHandler = event => {
      emit(event)
    }
    const userLeaveChannelHandler = event => {
      emit(event)
    }
    const newMessageHandler = event => {
      emit(event)
    }
    const loadChannelMessagesHandler = event => {
      emit(event)
    }
    const loadChannelMembersHandler = event => {
      emit(event)
    }
    socket.on(LOAD_ALL_CHANNELS_RESPONSE, loadAllChannelsHandler)
    socket.on(USER_JOIN_CHANNEL_RESPONSE, userJoinChannelHandler)
    socket.on(USER_LEAVE_CHANNEL_RESPONSE, userLeaveChannelHandler)
    socket.on(NEW_MESSAGE_RESPONSE, newMessageHandler)
    socket.on(LOAD_CHANNEL_MESSAGES_RESPONSE, loadChannelMessagesHandler)
    socket.on(LOAD_CHANNEL_MEMBERS_RESPONSE, loadChannelMembersHandler)
    const unsubscribe = () => {
      socket.off(LOAD_ALL_CHANNELS_RESPONSE, loadAllChannelsHandler)
      socket.off(USER_JOIN_CHANNEL_RESPONSE, userJoinChannelHandler)
      socket.off(USER_LEAVE_CHANNEL_RESPONSE, userLeaveChannelHandler)
      socket.off(NEW_MESSAGE_RESPONSE, newMessageHandler)
      socket.off(LOAD_CHANNEL_MESSAGES_RESPONSE, loadChannelMessagesHandler)
      socket.off(LOAD_CHANNEL_MEMBERS_RESPONSE, loadChannelMembersHandler)
    }
    return unsubscribe
  })
}
// from server
export function* watchEvents() {
  const socketChannel = yield call(createSocketChannel, socket)
  while (true) {
    try {
      const event = yield take(socketChannel)
      switch (event.type) {
        case LOAD_ALL_CHANNELS_RESPONSE: {
          yield put(genericActionCreator(LOAD_ALL_CHANNELS, event.payload))
          break
        }
        case USER_JOIN_CHANNEL_RESPONSE: {
          yield put(genericActionCreator(USER_JOIN_CHANNEL, event.payload))
          break
        }
        case USER_LEAVE_CHANNEL_RESPONSE: {
          yield put(genericActionCreator(USER_LEAVE_CHANNEL, event.payload))
          break
        }
        case NEW_MESSAGE_RESPONSE: {
          yield put(genericActionCreator(NEW_MESSAGE, event.payload))
          break
        }
        case LOAD_CHANNEL_MESSAGES_RESPONSE: {
          yield put(genericActionCreator(LOAD_CHANNEL_MESSAGES, event.payload))
          break
        }
        case LOAD_CHANNEL_MEMBERS_RESPONSE: {
          yield put(genericActionCreator(LOAD_CHANNEL_MEMBERS, event.payload))
          break
        }
        default:
          break
      }
    } catch (error) {
      console.error('socket error:', error)
      // socketChannel.close()
    }
  }
}
// to server
export function* watchActions() {
  socket = yield call(createWebSocketConnection)
  const requestChannel = yield actionChannel('*')
  while (true) {
    try {
      const action = yield take(requestChannel)
      console.log(action)
      switch (action.type) {
        case LOAD_ALL_CHANNELS_REQUEST: {
          yield apply(socket, socket.emit, [LOAD_ALL_CHANNELS_REQUEST])
          break
        }
        case USER_JOIN_CHANNEL_REQUEST: {
          yield apply(socket, socket.emit, [
            USER_JOIN_CHANNEL_REQUEST,
            action.payload
          ])
          break
        }
        case USER_LEAVE_CHANNEL_REQUEST: {
          yield apply(socket, socket.emit, [
            USER_LEAVE_CHANNEL_REQUEST,
            action.payload
          ])
          break
        }
        case NEW_MESSAGE_REQUEST: {
          yield apply(socket, socket.emit, [
            NEW_MESSAGE_REQUEST,
            action.payload
          ])
          break
        }
        case LOAD_CHANNEL_MESSAGES_REQUEST: {
          yield apply(socket, socket.emit, [
            LOAD_CHANNEL_MESSAGES_REQUEST,
            action.payload
          ])
          break
        }
        case LOAD_CHANNEL_MEMBERS_REQUEST: {
          yield apply(socket, socket.emit, [
            LOAD_CHANNEL_MEMBERS_REQUEST,
            action.payload
          ])
          break
        }
        default:
          break
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const chatSagas = [call(watchActions), call(watchEvents)]
