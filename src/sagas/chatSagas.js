import { take, put, call, apply, actionChannel } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import createWebSocketConnection from '../pages/chat/socketConnection'
import { genericActionCreator } from '../reducers/rootReducer'
import {
  USER_LOGOUT,
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
  LOAD_CHANNEL_MEMBERS,
  USER_SET_ACTIVE_CHANNEL_REQUEST,
  USER_SET_ACTIVE_CHANNEL_RESPONSE,
  USER_SET_ACTIVE_CHANNEL,
  USER_SET_LAST_VISIT_ON_CHANNEL_REQUEST,
  USER_SET_LAST_VISIT_ON_CHANNEL_RESPONSE,
  USER_SET_LAST_VISIT_ON_CHANNEL,
  SERVER_CONNECT,
  SERVER_CONNECT_RESPONSE,
  CLOSE_SOCKET
} from '../reducers/actionTypes'
import { runSaga } from '../reducers/store'

let socket
let socketChannel

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
    const userSetActiveChannelHandler = event => {
      emit(event)
    }
    const serverConnected = event => {
      emit(event)
    }
    socket.on(SERVER_CONNECT_RESPONSE, serverConnected)
    socket.on(LOAD_ALL_CHANNELS_RESPONSE, loadAllChannelsHandler)
    socket.on(USER_JOIN_CHANNEL_RESPONSE, userJoinChannelHandler)
    socket.on(USER_LEAVE_CHANNEL_RESPONSE, userLeaveChannelHandler)
    socket.on(NEW_MESSAGE_RESPONSE, newMessageHandler)
    socket.on(LOAD_CHANNEL_MESSAGES_RESPONSE, loadChannelMessagesHandler)
    socket.on(LOAD_CHANNEL_MEMBERS_RESPONSE, loadChannelMembersHandler)
    socket.on(USER_SET_ACTIVE_CHANNEL_RESPONSE, userSetActiveChannelHandler)
    const unsubscribe = () => {
      socket.off(SERVER_CONNECT_RESPONSE, serverConnected)
      socket.off(LOAD_ALL_CHANNELS_RESPONSE, loadAllChannelsHandler)
      socket.off(USER_JOIN_CHANNEL_RESPONSE, userJoinChannelHandler)
      socket.off(USER_LEAVE_CHANNEL_RESPONSE, userLeaveChannelHandler)
      socket.off(NEW_MESSAGE_RESPONSE, newMessageHandler)
      socket.off(LOAD_CHANNEL_MESSAGES_RESPONSE, loadChannelMessagesHandler)
      socket.off(LOAD_CHANNEL_MEMBERS_RESPONSE, loadChannelMembersHandler)
      socket.off(USER_SET_ACTIVE_CHANNEL_RESPONSE, userSetActiveChannelHandler)
    }
    return unsubscribe
  })
}
// from server
function* watchEvents() {
  socketChannel = yield call(createSocketChannel, socket)
  while (true) {
    try {
      const event = yield take(socketChannel)
      switch (event.type) {
        case SERVER_CONNECT_RESPONSE: {
          yield put(genericActionCreator(SERVER_CONNECT))
          break
        }
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
        case USER_SET_ACTIVE_CHANNEL_RESPONSE: {
          yield put(
            genericActionCreator(USER_SET_ACTIVE_CHANNEL, event.payload)
          )
          break
        }
        case USER_SET_LAST_VISIT_ON_CHANNEL_RESPONSE: {
          yield put(
            genericActionCreator(USER_SET_LAST_VISIT_ON_CHANNEL, event.payload)
          )
          break
        }
        default:
          break
      }
    } catch (error) {
      console.error('socket error:', error)
      socketChannel.close()
      socket.close()
    }
  }
}
// to server
export function* watchActions() {
  const requestChannel = yield actionChannel('*')
  socket = yield call(createWebSocketConnection)
  yield call(runSaga, watchEvents)
  yield take(SERVER_CONNECT)
  while (true) {
    try {
      const action = yield take(requestChannel)
      switch (action.type) {
        case LOAD_ALL_CHANNELS_REQUEST: {
          yield apply(socket, socket.emit, [LOAD_ALL_CHANNELS_REQUEST])
          yield take(LOAD_ALL_CHANNELS)
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
        case USER_SET_ACTIVE_CHANNEL_REQUEST: {
          yield apply(socket, socket.emit, [
            USER_SET_ACTIVE_CHANNEL_REQUEST,
            action.payload
          ])
          break
        }
        case USER_SET_LAST_VISIT_ON_CHANNEL_REQUEST: {
          yield apply(socket, socket.emit, [
            USER_SET_LAST_VISIT_ON_CHANNEL_REQUEST,
            action.payload
          ])
          break
        }
        case USER_LOGOUT: {
          yield apply(socket, socket.disconnect)
          break
        }
        case CLOSE_SOCKET: {
          requestChannel.close()
          socket.close()
          break
        }
        default:
          break
      }
    } catch (error) {
      console.log(error)
      requestChannel.close()
      socket.close()
    }
  }
}
