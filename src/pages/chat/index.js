import React, { useState } from 'react'
import io from 'socket.io-client'
import StyledChatPage from '../../components/blocks/StyledChatPage'
import Chatroom from './chatroom'
import Tabs from './tabs'

const tabs = [
  { title: 'time', id: 11 },
  { title: 'new age', id: 22 },
  { title: 'I, me and myself', id: 33 },
  { title: 'guru meditation', id: 44 },
  { title: 'five', id: 55 },
  { title: 'impossible', id: 66 }
]

const Chat = props => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const socket = io('http://backend.deep-chat.com', { path: '/chat' })
  socket.on('connect', () => {
    socket.emit(
      'clientConnected',
      `Client with id: ${socket.id} connected successfully`
    )
    socket.on('serverConnected', message => {
      setMessage(message)
    })
  })
  socket.on('authError', err => {
    console.log('Authentication failed: ', err)
    setError(err)
    socket.disconnect()
  })

  return (
    <StyledChatPage>
      <Tabs tabs={tabs} />
      <Chatroom message={message} />
      <p>{error}</p>
    </StyledChatPage>
  )
}

export default Chat
