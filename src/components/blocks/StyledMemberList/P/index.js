import styled from 'styled-components/macro'

const P = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  color: ${props => (props.active ? 'green' : 'gray')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
`

export default P
