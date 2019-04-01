import React from 'react'
import StyledForm from '../../../../components/blocks/StyledForm'

const Form = ({
  name,
  username,
  password,
  passwordConfirm,
  edit,
  handleFieldChange,
  clearFields
}) => {
  return (
    <StyledForm>
      Name:
      <StyledForm.Label>
        <StyledForm.Input
          name="name"
          value={name}
          placeholder="name"
          onChange={handleFieldChange}
        />
      </StyledForm.Label>
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
      <StyledForm.Label>
        Password confirm:
        <StyledForm.Input
          name="passwordConfirm"
          type="password"
          value={passwordConfirm}
          placeholder="password confirm"
          onChange={handleFieldChange}
        />
      </StyledForm.Label>
      <div style={{ display: 'inline-block' }}>
        <StyledForm.Button onClick={edit} type="submit">
          Submit
        </StyledForm.Button>
        <StyledForm.Button onClick={clearFields}>Clear</StyledForm.Button>
      </div>
    </StyledForm>
  )
}

export default Form
