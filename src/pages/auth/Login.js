import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import StyledColumn from '../../components/blocks/StyledColumn'
import H1 from '../../components/elements/H1'
import { requestLoginUser } from '../../reducers/userReducer'

const Login = ({ user, requestLoginUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)

  const login = e => {
    e.preventDefault()
    requestLoginUser({
      username,
      password
    })
    if (user.id) {
      setUsername('')
      setPassword('')
      setSuccess(true)
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

  return (
    <>
      {success && <Redirect to="/home" />}
      <StyledColumn>
        <H1>Login</H1>
        <LoginForm
          handleFieldChange={handleFieldChange}
          login={login}
          clearFields={clearFields}
          username={username}
          password={password}
        />
      </StyledColumn>
    </>
  )
}

const mapDispatchToProps = { requestLoginUser }

export default connect(
  null,
  mapDispatchToProps
)(Login)
