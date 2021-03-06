import styled from 'styled-components/macro'
import LI from './LI'
import Icon from './Icon'

const StyledChannelsRow = styled.ul`
  margin-inline-end: 6px;
  margin-inline-start: 6px;
  padding-inline-start: 5px;
  padding-inline-end: 5px;
  margin-block-end: 0;
  margin-block-start: 0;
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
  flex-shrink: 0;
`

StyledChannelsRow.LI = LI
StyledChannelsRow.Icon = Icon
export default StyledChannelsRow
