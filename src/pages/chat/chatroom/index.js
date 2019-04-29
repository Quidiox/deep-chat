import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import StyledChatroom from '../../../components/blocks/StyledChatroom'
import MessageField from './messageField'
import MemberList from './memberList'
import MessageList from './messageList'
import { requestLoadChannelMessages } from '../../../reducers/channelMessagesReducer'
import { requestLoadChannelMembers } from '../../../reducers/channelMembersReducer'

const Chatroom = ({
  requestLoadChannelMessages,
  requestLoadChannelMembers,
  messages,
  members,
  channelId,
  tabRowHeight
}) => {
  const messageFieldHeight = 44
  const headerHeight = 30
  const messageListHeightModifier =
    messageFieldHeight + tabRowHeight + headerHeight
  console.log(messageListHeightModifier)
  useEffect(
    () => {
      if (channelId && channelId.length > 10) {
        requestLoadChannelMessages({ channelId })
        requestLoadChannelMembers({ channelId })
      }
    },
    [channelId, requestLoadChannelMessages, requestLoadChannelMembers]
  )
  return (
    <StyledChatroom messageListHeightModifier={messageListHeightModifier}>
      <MessageList
        messages={
          channelId && messages && messages[channelId]
            ? messages[channelId].messages
            : []
        }
      />
      <MemberList
        members={
          channelId && members && members[channelId]
            ? members[channelId].members
            : []
        }
      />
      <MessageField channelId={channelId} />
    </StyledChatroom>
  )
}

const mapStateToProps = state => ({
  messages: state.messages,
  members: state.members
})

const mapDispatchToProps = {
  requestLoadChannelMessages,
  requestLoadChannelMembers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatroom)
