import React from 'react'
import H2 from '../../components/elements/H2'

const Error = ({ error }) => {
  console.log(error)
  return <H2>Error: {error}</H2>
}

export default Error
