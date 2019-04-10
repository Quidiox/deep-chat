import io from 'socket.io-client'

const createWebSocketConnection = () => {
  const socket = io('http://backend.deep-chat.com', { path: '/chat' })
  socket.on('connect', () => {
    socket.emit(
      'clientConnected',
      `Client with id: ${socket.id} connected successfully`
    )
  })
  return socket
}

export default createWebSocketConnection
