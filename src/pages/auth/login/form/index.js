import React from 'react'
import StyledForm from '../../../../components/blocks/StyledForm'

const Form = ({
  login,
  handleFieldChange,
  clearFields,
  username,
  password
}) => {
  return (
    <StyledForm>
      <StyledForm.Fieldset>
        <StyledForm.Legend>Login</StyledForm.Legend>
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
        <StyledForm.Button onClick={login} type="submit">
          Login
        </StyledForm.Button>
        <StyledForm.Button onClick={clearFields}>Clear</StyledForm.Button>
      </StyledForm.Fieldset>
    </StyledForm>
  )
}

export default Form
