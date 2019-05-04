import styled from 'styled-components/macro'

const Button = styled.button`
  margin: 5px 10px;
  right: -170px;
  bottom: ${props => (props.bottom ? props.bottom : '-20px')};
  background-color: ${props => props.backgroundColor || 'lightgray'};
  position: relative;
  border: none;
  cursor: pointer;
  outline: solid #adadad 1px;
  padding: 2px 2px;
`

export default Button
