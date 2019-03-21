import styled from 'styled-components/macro'
import LI from './LI'
import A from './A'

const StyledRow = styled.ul`
  margin: 0;
  padding: 0;
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    top: 0;
    left: 0;
    border-top: 1px solid #aaa;
    z-index: 1;
  }
`

StyledRow.A = A
StyledRow.LI = LI

export default StyledRow
