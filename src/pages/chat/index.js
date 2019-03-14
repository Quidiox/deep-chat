import React, { useState } from 'react'
import io from 'socket.io-client'

const Chat = props => {
  const [message, setMessage] = useState('')

  const initializeSocketIO = () => {
    const socket = io('http://backend.deep-chat.com', { path: '/chat' })
    socket.on('connect', () => {
      socket.emit('message', 'hello world!!!111!!')
      socket.on('hi', message => {
        setMessage(message)
      })
    })
  }
  initializeSocketIO()
  return <div>{message}</div>
}

export default Chat
