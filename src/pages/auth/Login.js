import React, { Component, Fragment } from 'react'
import StyledForm from '../../components/blocks/StyledForm'

class Login extends Component {
  render() {
    return (
      <Fragment>
        <StyledForm>
          <StyledForm.Input placeholder="username" />
          <StyledForm.Input placeholder="password" />
          <StyledForm.Button>Submit</StyledForm.Button>
        </StyledForm>
      </Fragment>
    )
  }
}

export default Login
