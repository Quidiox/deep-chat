import styled from 'styled-components/macro'

const Button = styled.button`
  margin: 20px 4px 3px 4px;
  padding: 4px 3px;
  border-radius: 5px;
  font-size: 1em;
  background-color: ${props => props.backgroundColor || 'lightgray'};
  position: relative;
  cursor: pointer;
  width: 123px;
  // outline: solid #adadad 1px;
`

export default Button
