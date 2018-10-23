import styled from 'styled-components'

const Input = styled.input`
  padding: 0.4em;
  margin: 0.2em 0.4em 0.2em 0.4em;
  color: ${props => props.inputColor || 'black'};
  background: papayawhip;
  border: solid black 1px;
  border-radius: 3px;
`

export default Input
