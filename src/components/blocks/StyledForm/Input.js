import styled from 'styled-components'

const Input = styled.input`
  padding: 0.4em;
  margin: 0.2em 0.4em 0.2em 0.4em;
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
