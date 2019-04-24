import React, { useState } from 'react'
import { connect } from 'react-redux'
import StyledMessageField from '../../../../components/blocks/StyledMessageField'
import { requestNewMessage } from '../../../../reducers/channelMessagesReducer'

const MessageField = React.memo(({ requestNewMessage, channelId }) => {
  const [text, setText] = useState('')

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    requestNewMessage({ channelId, text })
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
})

const mapDispatchToProps = { requestNewMessage }

export default connect(
  null,
  mapDispatchToProps
)(MessageField)
