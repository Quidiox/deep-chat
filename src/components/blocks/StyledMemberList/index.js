import styled from 'styled-components/macro'
import LI from './LI'
import P from './P'

const StyledMemberList = styled.ul`
  width: 75px;
  min-height: 50px;
  max-height: 100vh;
  list-style-type: none;
  padding: 3px;
  margin: 21px 0 0 0;
  position: fixed;
  right: 0;
  z-index: 5;
  cursor: pointer;
  overflow-y: auto;
  border: 1px solid #d3d3d3;
  background: #ffffff;
`

StyledMemberList.LI = LI
StyledMemberList.P = P

export default StyledMemberList
