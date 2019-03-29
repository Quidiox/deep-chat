import styled from 'styled-components/macro'

const Button = styled.button`
  margin: 5px;
  right: -195px;
  bottom: -30px;
  background-color: ${props => props.backgroundColor || 'lightgray'};
  position: relative;
  border: none;
  cursor: pointer;
  outline: solid black 0.1em;
  padding: 2px 2px;
`

export default Button
