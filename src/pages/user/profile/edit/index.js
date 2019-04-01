import React, { useState } from 'react'
import { connect } from 'react-redux'
import validator from 'validator'
import Form from './form'
import StyledColumn from '../../../../components/blocks/StyledColumn'
import H1 from '../../../../components/elements/H1'
import P from '../../../../components/elements/P'
import { requestEditUser } from '../../../../reducers/userReducer'

const inputValidation = (name, username, password, passwordConfirm) => {
  const errors = []
  if (
    name &&
    !validator.isEmpty(name) &&
    !validator.matches(name, /^[a-zA-Z\s]+$/)
  )
    errors.push('Name must contain only alphabetic characters.')
  if (
    name &&
    !validator.isEmpty(name) &&
    !validator.isLength(name, { min: 3, max: 30 })
  )
    errors.push('Name must be between 3-30 characters long.')
  if (
    username &&
    !validator.isEmpty(username) &&
    !validator.isAlphanumeric(username)
  )
    errors.push('Username must contain only alphanumeric characters.')
  if (
    username &&
    !validator.isEmpty(username) &&
    !validator.isLength(username, { min: 3, max: 30 })
  )
    errors.push('Username must be between 3-30 characters long.')
  if (
    (password || passwordConfirm) &&
    !validator.equals(password, passwordConfirm)
  )
    errors.push('Passwords do not match.')
  if (
    password &&
    !validator.isEmpty(password) &&
    !validator.isLength(password, { min: 3, max: 30 })
  )
    errors.push('Password must be between 3-30 characters long.')
  return errors
}

const Edit = ({ requestEditUser, user }) => {
  const [name, setName] = useState(user.name)
  const [username, setUsername] = useState(user.username)
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errors, setErrors] = useState([])

  const edit = async e => {
    e.preventDefault()
    const nameToValidate = name !== user.name ? name : undefined
    const usernameToValidate = username !== user.username ? username : undefined
    const passwordToValidate = password.length > 0 ? password : undefined
    const passwordConfirmToValidate =
      passwordConfirm.length > 0 ? passwordConfirm : undefined
    const errors = inputValidation(
      nameToValidate,
      usernameToValidate,
      passwordToValidate,
      passwordConfirmToValidate
    )
    if (errors.length !== 0) {
      setErrors(errors)
    } else {
      await requestEditUser({
        id: user.id,
        name: nameToValidate,
        username: usernameToValidate,
        password: passwordToValidate
      })
      // setName('')
      // setUsername('')
      // setPassword('')
      // setPasswordConfirm('')
      // setErrors([])
    }
  }

  const handleFieldChange = e => {
    if (e.target.name === 'name') setName(e.target.value)
    else if (e.target.name === 'username') setUsername(e.target.value)
    else if (e.target.name === 'password') setPassword(e.target.value)
    else if (e.target.name === 'passwordConfirm')
      setPasswordConfirm(e.target.value)
  }

  const clearFields = () => {
    setName('')
    setUsername('')
    setPassword('')
    setPasswordConfirm('')
    setErrors([])
  }

  return (
    <StyledColumn>
      <H1>Edit user details</H1>
      <P>
        Fill in the user details you wish
        <br /> to change and leave other fields
        <br /> unmodified.
      </P>
      <Form
        name={name}
        username={username}
        password={password}
        passwordConfirm={passwordConfirm}
        edit={edit}
        handleFieldChange={handleFieldChange}
        clearFields={clearFields}
      />
      <div>
        {errors.map(error => (
          <P key={error}>{error}</P>
        ))}
      </div>
    </StyledColumn>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = { requestEditUser }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
