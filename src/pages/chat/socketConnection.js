import io from 'socket.io-client'

const createWebSocketConnection = () => {
  const socket = io('http://backend.deep-chat.com', {
    path: '/chat',
    reconnect: true
  })
  socket.on('connect', () => {
    socket.emit(
      'clientConnected',
      `Client with id: ${socket.id} connected successfully`
    )
  })
  socket.on('disconnect', reason => {
    console.log('socket.io client disconnected: ', reason)
  })
  socket.on('error', error => {
    console.log('error: ', error)
  })
  return socket
}

export default createWebSocketConnection