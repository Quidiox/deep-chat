import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StyledChatroom from '../../../components/blocks/StyledChatroom'
import MessageField from './messageField'
import MemberList from './memberList'
import MessageList from './messageList'
import MemberBar from './memberBar'
import { requestLoadChannelMessages } from '../../../reducers/channelMessagesReducer'
import { requestLoadChannelMembers } from '../../../reducers/channelMembersReducer'

const MESSAGE_FIELD_HEIGHT = 44
const HEADER_HEIGHT = 30
const MEMBERSTAB_HEIGHT = 17

const Chatroom = ({
  requestLoadChannelMessages,
  requestLoadChannelMembers,
  messages,
  members,
  channelId,
  channelsRowHeight
}) => {
  const [messageListHeightModifier, setMessageListHeightModifier] = useState(0)
  const [memberListVisible, setMemberListVisible] = useState(false)
  useEffect(
    () => {
      setMessageListHeightModifier(
        MESSAGE_FIELD_HEIGHT +
          HEADER_HEIGHT +
          MEMBERSTAB_HEIGHT +
          channelsRowHeight
      )
    },
    [channelsRowHeight]
  )
  useEffect(
    () => {
      if (channelId) {
        requestLoadChannelMessages({ channelId })
        requestLoadChannelMembers({ channelId })
      }
    },
    [channelId, requestLoadChannelMessages, requestLoadChannelMembers]
  )
  const changeMemberListVisibility = () => {
    setMemberListVisible(!memberListVisible)
  }
  return (
    <StyledChatroom messageListHeightModifier={messageListHeightModifier}>
      <MemberBar
        activeMembers={
          channelId &&
          members &&
          members[channelId] &&
          members[channelId].activeMembers
            ? members[channelId].activeMembers.length
            : 0
        }
        totalMembers={
          channelId &&
          members &&
          members[channelId] &&
          members[channelId].members
            ? members[channelId].members.length
            : 0
        }
        changeMemberListVisibility={changeMemberListVisibility}
      />
      <MessageList
        messages={
          channelId && messages && messages[channelId]
            ? messages[channelId].messages
            : []
        }
      />
      {memberListVisible && (
        <MemberList
          members={
            channelId && members && members[channelId]
              ? members[channelId].members
              : []
          }
          activeMembers={
            channelId && members && members[channelId]
              ? members[channelId].activeMembers
              : []
          }
          changeMemberListVisibility={changeMemberListVisibility}
        />
      )}
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
