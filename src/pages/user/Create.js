import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import CreateForm from './CreateForm'
import { requestCreateUser } from '../../reducers/userReducer'

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
      <Fragment>
        <CreateForm
          name={name}
          username={username}
          password={password}
          passwordConfirm={passwordConfirm}
          create={this.create}
          handleFieldChange={this.handleFieldChange}
          clearFields={this.clearFields}
        />
        <div>{error}</div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = { requestCreateUser }

export default connect(
  null,
  mapDispatchToProps
)(Create)
