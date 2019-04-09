import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import StyledChatPage from '../../components/blocks/StyledChatPage'
import Chatroom from './chatroom'
import Channels from './channels'
import Error from '../error'

const channels = [
  { title: 'time', id: 11 },
  { title: 'new age', id: 22 },
  { title: 'I, me and myself', id: 33 },
  { title: 'guru meditation', id: 44 },
  { title: 'five', id: 55 },
  { title: 'impossible', id: 66 }
]

const Chat = ({ user }) => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    //load channels and messages from server
  }, [])
  const socket = io('http://backend.deep-chat.com', { path: '/chat' })
  socket.on('connect', () => {
    socket.emit(
      'clientConnected',
      `Client with id: ${socket.id} connected successfully`
    )
    socket.emit('user', user)
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
      {error && <Error error={error} />}
      <Channels channels={channels} />
      <Chatroom message={message} socket={socket} />
      <p>{error}</p>
    </StyledChatPage>
  )
}

const mapDispatchToProps = {}

export default connect(
  null,
  mapDispatchToProps
)(Chat)
