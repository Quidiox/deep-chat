import React from 'react'
import StyledMessageList from '../../../../components/blocks/StyledMessageList'

const MessageList = props => (
  <StyledMessageList>
    {props.messages.map(message => (
      <StyledMessageList.LI key={message.id}>
        {message.text}
      </StyledMessageList.LI>
    ))}
  </StyledMessageList>
)

export default MessageList
