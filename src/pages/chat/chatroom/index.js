import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StyledChatroom from '../../../components/blocks/StyledChatroom'
import MessageField from './messageField'
import MemberList from './memberList'
import MessageList from './messageList'
import { requestLoadChannelMessages } from '../../../reducers/channelMessagesReducer'
import { requestLoadChannelMembers } from '../../../reducers/channelMembersReducer'

const MESSAGE_FIELD_HEIGHT = 44
const HEADER_HEIGHT = 30

const Chatroom = ({
  requestLoadChannelMessages,
  requestLoadChannelMembers,
  messages,
  members,
  channelId,
  tabRowHeight
}) => {
  const [messageListHeightModifier, setMessageListHeightModifier] = useState()
  useEffect(
    () => {
      setMessageListHeightModifier(
        MESSAGE_FIELD_HEIGHT + HEADER_HEIGHT + tabRowHeight
      )
    },
    [tabRowHeight]
  )
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
