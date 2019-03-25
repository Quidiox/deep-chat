import styled from 'styled-components/macro'
import LI from './LI'

const StyledUserList = styled.ul`
  list-style-type: none;
  padding: 0 10px 0 5px;
  margin: 1px 0 1px 0;
  position: fixed;
  right: 0;
`

StyledUserList.LI = LI

export default StyledUserList
