import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StyledChatroom from '../../../components/blocks/StyledChatroom'
import MessageField from './messageField'
import UserList from './userList'
import MessageList from './messageList'
import {
  requestLoadChannelMessages,
  requestNewMessage
} from '../../../reducers/channelMessagesReducer'
import { requestLoadChannelUsers } from '../../../reducers/channelUsersReducer'

const Chatroom = ({
  requestLoadChannelMessages,
  requestLoadChannelUsers,
  requestNewMessage,
  messages,
  users,
  channelId
}) => {
  useEffect(
    () => {
      requestLoadChannelMessages({ channelId })
      requestLoadChannelUsers(channelId)
    },
    [channelId]
  )
  const newMessage = name => {
    requestNewMessage(name)
  }
  return (
    <StyledChatroom>
      <MessageList messages={messages} channelId={channelId} />
      <UserList users={users} channelId={channelId} />
      <MessageField newMessage={newMessage} channelId={channelId} />
    </StyledChatroom>
  )
}

const mapStateToProps = state => ({
  messages: state.messages,
  users: state.users
})

const mapDispatchToProps = {
  requestLoadChannelMessages,
  requestLoadChannelUsers,
  requestNewMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom)
