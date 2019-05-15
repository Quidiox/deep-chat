import React from 'react'
import StyledErrorMessage from '../../components/blocks/StyledErrorMessage'

const Error = ({ error }) => (
  <StyledErrorMessage>
    <StyledErrorMessage.H3>Error: {error}</StyledErrorMessage.H3>
    <StyledErrorMessage.Button />
  </StyledErrorMessage>
)

export default Error
