import styled from 'styled-components'
import StyledForm from '../StyledForm'
import Input from '../StyledForm/Input'
import Button from '../StyledForm/Button'

const StyledMessageField = styled(StyledForm)`
  position: fixed;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const formInput = styled(Input)`
  width: 100%;
`

const formButton = styled(Button)`
  width: 100px;
`

StyledMessageField.Input = formInput
StyledMessageField.Button = formButton

export default StyledMessageField
