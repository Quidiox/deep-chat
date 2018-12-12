import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import StyledColumn from '../../components/blocks/StyledColumn'
import H1 from '../../components/elements/H1'
import { requestLoginUser } from '../../reducers/userReducer'

class Login extends Component {
  state = { username: '', password: '' }

  login = e => {
    e.preventDefault()
    const { username, password } = this.state
    this.props.requestLoginUser({
      username,
      password
    })
    this.setState({ username: '', password: '' })
  }

  handleFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  clearFields = e => {
    e.preventDefault()
    this.setState({ username: '', password: '' })
  }

  render() {
    const { username, password } = this.state
    return (
      <StyledColumn>
        <H1>Login</H1>
        <LoginForm
          handleFieldChange={this.handleFieldChange}
          login={this.login}
          clearFields={this.clearFields}
          username={username}
          password={password}
        />
      </StyledColumn>
    )
  }
}

const mapDispatchToProps = { requestLoginUser }

export default connect(
  null,
  mapDispatchToProps
)(Login)
