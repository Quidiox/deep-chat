import React from 'react'
import StyledForm from '../../../../components/blocks/StyledForm'

const Form = ({
  name,
  username,
  password,
  passwordConfirm,
  create,
  handleFieldChange,
  clearFields
}) => {
  return (
    <StyledForm>
      <StyledForm.Input
        name="name"
        value={name}
        placeholder="name"
        onChange={handleFieldChange}
        required
      />
      <StyledForm.Input
        name="username"
        placeholder="username"
        value={username}
        onChange={handleFieldChange}
        required
      />
      <StyledForm.Input
        name="password"
        type="password"
        value={password}
        placeholder="password"
        onChange={handleFieldChange}
        required
      />
      <StyledForm.Input
        name="passwordConfirm"
        type="password"
        value={passwordConfirm}
        placeholder="password confirm"
        onChange={handleFieldChange}
        required
      />

      <div style={{ display: 'inline-block' }}>
        <StyledForm.Button onClick={create} type="submit">
          Submit
        </StyledForm.Button>
        <StyledForm.Button onClick={clearFields}>Clear</StyledForm.Button>
      </div>
    </StyledForm>
  )
}

export default Form
