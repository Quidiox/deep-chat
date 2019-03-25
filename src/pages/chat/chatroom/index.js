import React from 'react'
import StyledChatroom from '../../../components/blocks/StyledChatroom'
import MessageField from './messageField'
import UserList from './userList'
import MessageList from './messageList'

const messages = [
  { text: 'hello', id: 1 },
  { text: 'world', id: 99 },
  { text: 'java is great', id: 7 },
  { text: 'java is not great', id: 2 }
]
const users = [
  { name: 'uui', id: 1 },
  { name: 'jarjar', id: 2 },
  { name: 'hehe', id: 4 },
  { name: 'pont', id: 6 }
]

const Chatroom = ({ message }) => {
  const checkMessage = message => {
    if (message) {
      messages.push({ text: message, id: Math.random() * 1000 })
    }
  }
  checkMessage(message)
  return (
    <StyledChatroom>
      <MessageList messages={messages} />
      <UserList users={users} />
      <MessageField />
    </StyledChatroom>
  )
}

export default Chatroom
