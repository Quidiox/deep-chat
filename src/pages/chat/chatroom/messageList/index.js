import React from 'react'
import { format, parseISO } from 'date-fns'
import StyledMessageList from '../../../../components/blocks/StyledMessageList'

const MessageList = React.memo(({ messages, channelId }) => {
  if (
    channelId &&
    messages &&
    messages[channelId] &&
    messages[channelId].messages &&
    messages[channelId].messages.length > 0
  ) {
    return (
      <StyledMessageList>
        {messages[channelId].messages.map(message => (
          <StyledMessageList.LI key={message.id}>
            <StyledMessageList.P>
              {format(parseISO(message.created), 'kk:mm:ss dd/MM')} &lt;
              {message.author.name}
              &gt; {message.text}
            </StyledMessageList.P>
          </StyledMessageList.LI>
        ))}
      </StyledMessageList>
    )
  }
  return (
    <StyledMessageList>
      <StyledMessageList.LI>
        <StyledMessageList.P>no messages yet</StyledMessageList.P>
      </StyledMessageList.LI>
    </StyledMessageList>
  )
})

export default MessageList
