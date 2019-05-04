import React from 'react'
import StyledForm from '../../components/blocks/StyledForm'

const LoginForm = ({
  login,
  handleFieldChange,
  clearFields,
  username,
  password
}) => {
  return (
    <StyledForm>
      <StyledForm.Label>
        Username:
        <StyledForm.Input
          name="username"
          placeholder="username"
          value={username}
          onChange={handleFieldChange}
        />
      </StyledForm.Label>
      <StyledForm.Label>
        Password:
        <StyledForm.Input
          name="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={handleFieldChange}
        />
      </StyledForm.Label>
      <div style={{ display: 'inline-block' }}>
        <StyledForm.Button onClick={login} type="submit">
          Submit
        </StyledForm.Button>
        <StyledForm.Button onClick={clearFields}>Clear</StyledForm.Button>
      </div>
    </StyledForm>
  )
}

export default LoginForm
