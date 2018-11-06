import styled from 'styled-components'
import Title from './Title'
import StyledMenu from '../StyledMenu'

const StyledHeader = styled.div`
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  width: 100%;
  height: 30px;
`

StyledHeader.Title = Title
StyledHeader.StyledMenu = StyledMenu

export default StyledHeader
