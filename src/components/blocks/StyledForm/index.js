import styled from 'styled-components/macro'
import Input from './Input'
import Button from './Button'
import Label from './Label'
import Fieldset from './Fieldset'
import Legend from './Legend'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`

StyledForm.Input = Input
StyledForm.Button = Button
StyledForm.Label = Label
StyledForm.Fieldset = Fieldset
StyledForm.Legend = Legend

export default StyledForm
