import styled from 'styled-components/macro'
import { List } from 'react-virtualized'
import LI from './LI'
import P from './P'

const StyledMessageList = styled(List)`
  list-style-type: none;
  padding: 0 5px 5px 10px;
  margin: 3px 0 0 0;
  z-index: 2;
`

StyledMessageList.LI = LI
StyledMessageList.P = P

export default StyledMessageList
