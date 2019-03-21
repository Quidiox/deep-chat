import React from 'react'
import StyledChatroom from '../../../components/blocks/StyledChatroom'
import Message from './message'
import Users from './users'
import Messages from './messages'

const messages = []
const users = []
const Chatroom = props => {
  return (
    <StyledChatroom>
      <Messages messages={messages} />
      <Users users={users} />
      <Message />
    </StyledChatroom>
  )
}

export default Chatroom
