import styled from 'styled-components/macro'
import H3 from './H3'
import Icon from './Icon'

const StyledErrorMessage = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  background: #d57f2a;
`

StyledErrorMessage.H3 = H3
StyledErrorMessage.Icon = Icon

export default StyledErrorMessage
