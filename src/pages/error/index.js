import React from 'react'
import StyledErrorMessage from '../../components/blocks/StyledErrorMessage'

const Error = ({ error, clearError }) => (
  <StyledErrorMessage>
    <StyledErrorMessage.H3>Error: {error}</StyledErrorMessage.H3>{' '}
    <StyledErrorMessage.Icon icon="times" onClick={clearError} />
  </StyledErrorMessage>
)

export default Error
