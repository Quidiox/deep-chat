import styled from 'styled-components/macro'
import LI from './LI'
import P from './P'

const StyledMemberList = styled.ul`
  width: 75px;
  min-height: 100px;
  height: auto;
  list-style-type: none;
  padding: 0 10px 1px 5px;
  margin: 21px 0 0 0;
  position: fixed;
  right: 0;
  background: lightblue;
  z-index: 5;
  cursor: pointer;
`

StyledMemberList.LI = LI
StyledMemberList.P = P

export default StyledMemberList
