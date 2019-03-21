import React from 'react'
import Message from './message'
import Users from './users'
import Messages from './messages'

const messages = []
const users = []
const Chatroom = props => {
  return (
    <>
      <Messages messages={messages} />
      <Users users={users} />
      <Message />
    </>
  )
}

export default Chatroom
