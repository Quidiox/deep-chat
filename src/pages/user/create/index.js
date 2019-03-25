import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './form'
import StyledColumn from '../../../components/blocks/StyledColumn'
import H1 from '../../../components/elements/H1'
import { requestCreateUser } from '../../../reducers/userReducer'

class Create extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    passwordConfirm: '',
    error: ''
  }

  create = e => {
    e.preventDefault()
    const { name, username, password, passwordConfirm } = this.state
    if (password !== passwordConfirm) {
      this.setState({ error: 'Passwords do not match.' })
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
        passwordConfirm: ''
      })
    }
  }

  handleFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: '' })
  }

  clearFields = e => {
    e.preventDefault()
    this.setState({
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
      error: ''
    })
  }

  render() {
    const { name, username, password, passwordConfirm, error } = this.state
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
        <div>{error}</div>
      </StyledColumn>
    )
  }
}

const mapDispatchToProps = { requestCreateUser }

export default connect(
  null,
  mapDispatchToProps
)(Create)
