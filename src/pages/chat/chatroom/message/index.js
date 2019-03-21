import React, { useState } from 'react'
import StyledForm from '../../../../components/blocks/StyledForm'

const Message = props => {
  const [message, setMessage] = useState('')

  const handleChange = e => {
    setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // send message to server logic here
    console.log('message: ', message)
    setMessage('')
  }

  return (
    <StyledForm>
      <StyledForm.Input
        onChange={handleChange}
        placeholder="Type a new message..."
        value={message}
      />
      <StyledForm.Button onClick={handleSubmit} type="submit">
        Submit
      </StyledForm.Button>
    </StyledForm>
  )
}

export default Message
