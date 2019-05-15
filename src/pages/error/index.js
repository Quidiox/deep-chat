import React from 'react'
import StyledErrorMessage from '../../components/blocks/StyledErrorMessage'

const Error = ({ error }) => (
  <StyledErrorMessage>Error: {error}</StyledErrorMessage>
)

export default Error
