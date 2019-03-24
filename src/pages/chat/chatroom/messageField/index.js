import React, { useState } from 'react'
import StyledMessageField from '../../../../components/blocks/StyledMessageField'

const MessageField = props => {
  const [message, setMessage] = useState('')

  const handleChange = e => {
    setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // send message to server logic action called here
    console.log('message: ', message)
    setMessage('')
  }

  return (
    <StyledMessageField>
      <StyledMessageField.Input
        onChange={handleChange}
        placeholder="Type a new message..."
        value={message}
      />
      <StyledMessageField.Button onClick={handleSubmit} type="submit">
        Submit
      </StyledMessageField.Button>
    </StyledMessageField>
  )
}

export default MessageField
