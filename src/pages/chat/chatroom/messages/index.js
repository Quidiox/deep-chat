import React from 'react'
import UL from '../../../../components/elements/UL'
import LI from '../../../../components/elements/LI'

const Messages = props => (
  <UL>
    {props.messages.map(message => (
      <LI key={message.id}>{message.text}</LI>
    ))}
  </UL>
)

export default Messages
