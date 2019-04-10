import { take, put, call, actionChannel } from 'redux-saga/effects'
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
  NEW_MESSAGE_REQUEST,
  NEW_MESSAGE_RESPONSE,
  NEW_MESSAGE,
  LOAD_ALL_CHANNELS_REQUEST,
  LOAD_ALL_CHANNELS_RESPONSE,
  LOAD_ALL_CHANNELS
} from '../reducers/actionTypes'

let socket

function createSocketChannel(socket) {
  return eventChannel(emit => {
    const userJoinChannelHandler = event => {
      emit(event)
    }
    const userLeaveChannelHandler = event => {
      emit(event)
    }
    const newMessageHandler = event => {
      emit(event)
    }
    const loadAllChannelsHandler = event => {
      emit(event)
    }
    socket.on(USER_JOIN_CHANNEL_RESPONSE, userJoinChannelHandler)
    socket.on(USER_LEAVE_CHANNEL_RESPONSE, userLeaveChannelHandler)
    socket.on(NEW_MESSAGE_RESPONSE, newMessageHandler)
    socket.on(LOAD_ALL_CHANNELS_RESPONSE, loadAllChannelsHandler)
    const unsubscribe = () => {
      socket.off(USER_JOIN_CHANNEL_RESPONSE, userJoinChannelHandler)
      socket.off(USER_LEAVE_CHANNEL_RESPONSE, userLeaveChannelHandler)
      socket.off(NEW_MESSAGE_RESPONSE, newMessageHandler)
      socket.off(LOAD_ALL_CHANNELS_RESPONSE, loadAllChannelsHandler)
    }
    return unsubscribe
  })
}

function* watchEvents() {
  socket = yield call(createWebSocketConnection)
  const socketChannel = yield call(createSocketChannel, socket)
  while (true) {
    try {
      const event = yield take(socketChannel)
      switch (event.type) {
        case USER_JOIN_CHANNEL_RESPONSE:
          yield put(genericActionCreator(USER_JOIN_CHANNEL, event.payload))
          break
        case USER_LEAVE_CHANNEL_RESPONSE:
          yield put(genericActionCreator(USER_LEAVE_CHANNEL, event.payload))
          break
        case NEW_MESSAGE_RESPONSE:
          yield put(genericActionCreator(NEW_MESSAGE, event.payload))
          break
        case LOAD_ALL_CHANNELS_RESPONSE:
          yield put(genericActionCreator(LOAD_ALL_CHANNELS, event.payload))
          break
        default:
          break
      }
    } catch (error) {
      console.error('socket error:', error)
      socketChannel.unsubscribe()
    }
  }
}

function* watchActions() {
  const requestChannel = yield actionChannel('*')
  while (true) {
    try {
      const action = yield take(requestChannel)
      switch (action.type) {
        case LOAD_ALL_CHANNELS_REQUEST:
          yield socket.emit(LOAD_ALL_CHANNELS_REQUEST)
          break
        case NEW_MESSAGE_REQUEST:
          yield socket.emit(NEW_MESSAGE_REQUEST, action.payload)
          break
        case USER_JOIN_CHANNEL_REQUEST:
          yield socket.emit(USER_JOIN_CHANNEL_REQUEST, action.payload)
          break
        case USER_LEAVE_CHANNEL_REQUEST:
          yield socket.emit(USER_LEAVE_CHANNEL_REQUEST, action.payload)
          break
        default:
          break
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const channelSagas = [call(watchEvents), call(watchActions)]
