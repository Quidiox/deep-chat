import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import validator from 'validator'
import Form from './form'
import StyledColumn from '../../../components/blocks/StyledColumn'
import P from '../../../components/elements/P'
import { requestCreateUser } from '../../../reducers/userReducer'

const inputValidation = (nickname, username, password, passwordConfirm) => {
  const errors = []
  if (!validator.isAlphanumeric(nickname))
    errors.push('Nickname must contain only alphabetic characters.')
  if (!validator.isLength(nickname, { min: 3, max: 30 }))
    errors.push('Nickname must be between 3-30 characters long.')
  if (!validator.isAlphanumeric(username))
    errors.push('Username must contain only alphanumeric characters.')
  if (!validator.isLength(username, { min: 3, max: 30 }))
    errors.push('Username must be between 3-30 characters long.')
  if (!validator.isLength(password, { min: 3, max: 30 }))
    errors.push('Password must be between 3-30 characters long.')
  if (!validator.equals(password, passwordConfirm))
    errors.push('Passwords do not match.')
  return errors
}

const Create = ({ user, requestCreateUser }) => {
  const [nickname, setNickname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errors, setErrors] = useState([])

  const create = e => {
    e.preventDefault()
    const errors = inputValidation(
      nickname,
      username,
      password,
      passwordConfirm
    )
    if (errors.length !== 0) {
      setErrors(errors)
    } else {
      requestCreateUser({
        nickname,
        username,
        password
      })
      if (user.id) {
        setNickname('')
        setUsername('')
        setPassword('')
        setPasswordConfirm('')
        setErrors([])
      }
    }
  }

  const handleFieldChange = e => {
    if (e.target.name === 'nickname') setNickname(e.target.value)
    else if (e.target.name === 'username') setUsername(e.target.value)
    else if (e.target.name === 'password') setPassword(e.target.value)
    else if (e.target.name === 'passwordConfirm')
      setPasswordConfirm(e.target.value)
  }

  const clearFields = () => {
    setNickname('')
    setUsername('')
    setPassword('')
    setPasswordConfirm('')
    setErrors([])
  }

  return (
    <>
      {user && user.id && <Redirect to="/home" />}
      <StyledColumn>
        <Form
          nickname={nickname}
          username={username}
          password={password}
          passwordConfirm={passwordConfirm}
          create={create}
          handleFieldChange={handleFieldChange}
          clearFields={clearFields}
        />
        <div>
          {errors.map(error => (
            <P key={error}>{error}</P>
          ))}
        </div>
      </StyledColumn>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = { requestCreateUser }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create)
