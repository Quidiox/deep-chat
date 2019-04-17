import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StyledChatroom from '../../../components/blocks/StyledChatroom'
import MessageField from './messageField'
import MemberList from './memberList'
import MessageList from './messageList'
import {
  requestLoadChannelMessages,
  requestNewMessage
} from '../../../reducers/channelMessagesReducer'
import { requestLoadChannelMembers } from '../../../reducers/channelMembersReducer'

const Chatroom = ({
  requestLoadChannelMessages,
  requestLoadChannelMembers,
  requestNewMessage,
  messages,
  members,
  channelId
}) => {
  useEffect(
    () => {
      // console.log('here we go: ', channelId, messages, members)
      if (channelId) {
        requestLoadChannelMessages({ channelId })
        requestLoadChannelMembers({ channelId })
      }
    },
    [channelId]
  )
  const newMessage = name => {
    requestNewMessage(name)
  }
  return (
    <StyledChatroom>
      <MessageList messages={messages} channelId={channelId} />
      <MemberList members={members} channelId={channelId} />
      <MessageField newMessage={newMessage} channelId={channelId} />
    </StyledChatroom>
  )
}

const mapStateToProps = state => ({
  messages: state.messages,
  members: state.members
})

const mapDispatchToProps = {
  requestLoadChannelMessages,
  requestLoadChannelMembers,
  requestNewMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom)
