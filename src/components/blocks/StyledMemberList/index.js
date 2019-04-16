import styled from 'styled-components/macro'
import LI from './LI'
import P from './P'

const StyledMemberList = styled.ul`
  width: 50px;
  list-style-type: none;
  padding: 0 10px 0 5px;
  margin: 1px 0 1px 0;
  position: fixed;
  right: 0;
`

StyledMemberList.LI = LI
StyledMemberList.P = P

export default StyledMemberList
