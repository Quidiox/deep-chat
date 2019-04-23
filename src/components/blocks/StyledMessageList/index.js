import styled from 'styled-components/macro'
import LI from './LI'
import P from './P'

const StyledMessageList = styled.ul`
  list-style-type: none;
  padding: 0 5px 5px 10px;
  margin: 1px 0 1px 0;
  position: fixed;
  bottom: 40px;
  z-index: 2;
  overflow-y: auto;
`

StyledMessageList.LI = LI
StyledMessageList.P = P

export default StyledMessageList
