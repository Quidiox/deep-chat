import styled from 'styled-components'

const Input = styled.input`
  padding: 0.2em;
  margin: 0.2em;
  color: ${props => props.inputColor || 'black'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

export default Input
