import io from 'socket.io-client'
import { CLIENT_CONNECT_REQUEST } from '../../reducers/actionTypes'

const createWebSocketConnection = () => {
  const socket = io('http://backend.deep-chat.com', {
    path: '/chat',
    reconnection: false,
    transports: ['websocket'],
    upgrade: false
  })
  socket.on('connect', () => {
    console.log('hehe connecting')
    socket.emit(
      CLIENT_CONNECT_REQUEST,
      `Client with id: ${socket.id} connected successfully`
    )
  })
  socket.on('disconnect', reason => {
    console.log('socket.io disconnected: ', reason)
    // here I should check the auth cookie and if it is valid then
    // reload channel, messages and members, otherwise logout
    // maybe a new action for this would be needed as auth cookie
    // check won't reload chat channel
    // dispatch({ type: 'AUTH_COOKIE_VERIFY_REQUEST' })
    socket.removeAllListeners()
    socket.close()
  })
  socket.on('error', error => {
    console.log('error: ', error)
  })
  return socket
}

export default createWebSocketConnection
