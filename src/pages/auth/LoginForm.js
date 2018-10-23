import React from 'react'
import StyledForm from '../../components/blocks/StyledForm'

const LoginForm = ({ login, handleFieldChange, clearFields }) => {
  return (
    <StyledForm>
      <StyledForm.Input
        name="username"
        placeholder="username"
        inputColor="blue"
        onChange={handleFieldChange}
      />
      <StyledForm.Input
        name="password"
        placeholder="password"
        onChange={handleFieldChange}
      />
      <StyledForm.Button onClick={login}>Submit</StyledForm.Button>
    </StyledForm>
  )
}

export default LoginForm
