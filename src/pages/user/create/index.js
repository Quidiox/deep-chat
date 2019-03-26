import React, { Component } from 'react'
import { connect } from 'react-redux'
import validator from 'validator'
import Form from './form'
import StyledColumn from '../../../components/blocks/StyledColumn'
import H1 from '../../../components/elements/H1'
import P from '../../../components/elements/P'
import { requestCreateUser } from '../../../reducers/userReducer'

class Create extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    passwordConfirm: '',
    errors: []
  }

  inputsAreValid = (name, username, password, passwordConfirm) => {
    const errors = []
    if (!validator.isAlpha(name))
      errors.push('Name should contain only alphabetic characters.')
    if (!validator.isLength(name, { min: 3, max: 30 }))
      errors.push('Name should be between 3-30 characters long.')
    if (!validator.isAlpha(username))
      errors.push('Username should contain only alphabetic characters.')
    if (!validator.isLength(username, { min: 3, max: 30 }))
      errors.push('Username should be between 3-30 characters long.')
    if (!validator.isLength(password, { min: 3, max: 30 }))
      errors.push('Password should be between 3-30 characters long.')
    if (!validator.equals(password, passwordConfirm))
      errors.push('Passwords do not match.')
    return errors
  }

  create = e => {
    e.preventDefault()
    const { name, username, password, passwordConfirm } = this.state
    const errors = this.inputsAreValid(
      name,
      username,
      password,
      passwordConfirm
    )
    if (errors.length !== 0) {
      this.setState({ errors })
    } else {
      this.props.requestCreateUser({
        name,
        username,
        password
      })
      this.setState({
        name: '',
        username: '',
        password: '',
        passwordConfirm: '',
        errors: []
      })
    }
  }

  handleFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: '' })
  }

  clearFields = e => {
    this.setState({
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
      errors: []
    })
  }

  render() {
    const { name, username, password, passwordConfirm, errors } = this.state
    return (
      <StyledColumn>
        <H1>Register</H1>
        <Form
          name={name}
          username={username}
          password={password}
          passwordConfirm={passwordConfirm}
          create={this.create}
          handleFieldChange={this.handleFieldChange}
          clearFields={this.clearFields}
        />
        <div>
          {errors.map(error => (
            <P key={error}>{error}</P>
          ))}
        </div>
      </StyledColumn>
    )
  }
}

const mapDispatchToProps = { requestCreateUser }

export default connect(
  null,
  mapDispatchToProps
)(Create)
