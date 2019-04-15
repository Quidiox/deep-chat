import React from 'react'
import StyledMessageList from '../../../../components/blocks/StyledMessageList'

const MessageList = ({ messages, channelId }) => {
  if (channelId && messages[channelId]) {
    return (
      <StyledMessageList>
        {messages[channelId].map(message => (
          <StyledMessageList.LI key={message.id}>
            {message.text}
          </StyledMessageList.LI>
        ))}
      </StyledMessageList>
    )
  }
  return <div>no messages</div>
}

export default MessageList
