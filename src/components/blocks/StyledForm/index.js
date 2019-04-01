import styled from 'styled-components/macro'
import Input from './Input'
import Button from './Button'
import Label from './Label'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`

StyledForm.Input = Input
StyledForm.Button = Button
StyledForm.Label = Label

export default StyledForm
