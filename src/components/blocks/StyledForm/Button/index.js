import styled from 'styled-components/macro'

const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 0.4em;
  margin: ${props => props.margin || '17px 4px 3px 4px'};
  border-radius: 3px;
  width: 45%;
`

export default Button
