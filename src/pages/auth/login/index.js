import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Form from './form'
import StyledColumn from '../../../components/blocks/StyledColumn'
import { requestLoginUser } from '../../../reducers/userReducer'

const Login = React.memo(({ user, requestLoginUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = e => {
    e.preventDefault()
    requestLoginUser({
      username,
      password
    })
    if (user.id) {
      setUsername('')
      setPassword('')
    }
  }

  const handleFieldChange = e => {
    if (e.target.name === 'username') setUsername(e.target.value)
    else if (e.target.name === 'password') setPassword(e.target.value)
  }

  const clearFields = e => {
    e.preventDefault()
    setUsername('')
    setPassword('')
  }

  if (user && user.id) {
    return <Redirect to="/home" />
  }
  return (
    <StyledColumn>
      <Form
        handleFieldChange={handleFieldChange}
        login={login}
        clearFields={clearFields}
        username={username}
        password={password}
      />
    </StyledColumn>
  )
})

const mapDispatchToProps = { requestLoginUser }

export default connect(
  null,
  mapDispatchToProps
)(Login)
