import styled from 'styled-components/macro'
import UL from '../../elements/UL'
import A from './A'
import LI from './LI'

const StyledTabRow = styled(UL)`
  cursor: pointer;
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

StyledTabRow.A = A
StyledTabRow.LI = LI

export default StyledTabRow
