import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = styled(FontAwesomeIcon)`
  ${props => (props.selected ? 'display: visible' : 'display: none')};
  margin: 0 0 2px 9px;
  cursor: pointer;
  user-select: none;
  font-size: 10px;
`

export default Icon
