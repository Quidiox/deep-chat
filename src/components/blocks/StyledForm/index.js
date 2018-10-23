import styled from 'styled-components'
import Input from './Input'
import Button from './Button'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`

StyledForm.Input = Input
StyledForm.Button = Button

export default StyledForm
