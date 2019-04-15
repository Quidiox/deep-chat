import React, { useState } from 'react'
import StyledMessageField from '../../../../components/blocks/StyledMessageField'

const MessageField = ({ newMessage, channelId }) => {
  const [text, setText] = useState('')

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    newMessage({ channelId, text })
    setText('')
  }

  return (
    <StyledMessageField>
      <StyledMessageField.Input
        onChange={handleChange}
        placeholder="Type a new message..."
        value={text}
      />
      <StyledMessageField.Button onClick={handleSubmit} type="submit">
        Submit
      </StyledMessageField.Button>
    </StyledMessageField>
  )
}

export default MessageField
