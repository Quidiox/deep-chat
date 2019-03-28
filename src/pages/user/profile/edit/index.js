import React, { useState } from 'react'
import { connect } from 'react-redux'
import validator from 'validator'
import Form from './form'
import StyledColumn from '../../../components/blocks/StyledColumn'
import H1 from '../../../components/elements/H1'
import P from '../../../components/elements/P'
import { requestEditUser } from '../../../reducers/userReducer'

const inputValidation = (name, username, password, passwordConfirm) => {
  const errors = []
  if (!validator.isAlpha(name))
    errors.push('Name must contain only alphabetic characters.')
  if (!validator.isLength(name, { min: 3, max: 30 }))
    errors.push('Name must be between 3-30 characters long.')
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

const Edit = props => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errors, setErrors] = useState([])

  const edit = e => {
    e.preventDefault()
    const errors = inputValidation(name, username, password, passwordConfirm)
    if (errors.length !== 0) {
      setErrors(errors)
    } else {
      props.requestEditUser({
        name,
        username,
        password
      })
      setName('')
      setUsername('')
      setPassword('')
      setPasswordConfirm('')
      setErrors([])
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

const mapDispatchToProps = { requestEditUser }

export default connect(
  null,
  mapDispatchToProps
)(Edit)
