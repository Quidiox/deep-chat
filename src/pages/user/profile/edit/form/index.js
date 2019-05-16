import React from 'react'
import StyledForm from '../../../../../components/blocks/StyledForm'

const Form = ({
  nickname,
  username,
  password,
  passwordConfirm,
  edit,
  handleFieldChange,
  clearFields
}) => {
  return (
    <StyledForm>
      <StyledForm.Fieldset>
        <StyledForm.Legend>Edit</StyledForm.Legend>
        <StyledForm.Label>
          Nickname:
          <StyledForm.Input
            name="nickname"
            value={nickname}
            placeholder="nickname"
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
        <StyledForm.Button onClick={edit} type="submit">
          Save
        </StyledForm.Button>
        <StyledForm.Button onClick={clearFields} type="button">
          Clear
        </StyledForm.Button>
      </StyledForm.Fieldset>
    </StyledForm>
  )
}

export default Form
