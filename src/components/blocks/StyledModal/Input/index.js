import styled from 'styled-components/macro'

const Input = styled.input`
  width: 240px;
  padding: 6px;
  margin: 3px 6px;
  border-radius: 3px;
  color: ${props => props.inputColor || 'black'};
  background: #e0e0e0;
  &:valid {
    border: solid green 1px;
  }
  &:invalid {
    border: dashed red 1px;
  }
  &:focus {
    background: white;
  }
`

export default Input
