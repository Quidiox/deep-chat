import styled from 'styled-components/macro'
import LI from './LI'

const StyledMessageList = styled.ul`
  list-style-type: none;
  padding: 0 5px 0 10px;
  margin: 1px 0 1px 0;
`

StyledMessageList.LI = LI

export default StyledMessageList
