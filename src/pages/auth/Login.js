import React, { Component } from 'react'
import LoginForm from './LoginForm'

class Login extends Component {
  state = { username: '', password: '' }

  login = e => {
    e.preventDefault()
  }

  handleFieldChange = (e, fieldName) => {
    console.log(fieldName)
    this.setState({ [e.target.name]: e.target.value })
  }

  clearFields = () => {
    this.setState({ username: '', password: '' })
  }

  render() {
    console.log(this.state)
    return (
      <LoginForm
        handleFieldChange={this.handleFieldChange}
        login={this.login}
        clearFields={this.clearFields}
      />
    )
  }
}

export default Login
