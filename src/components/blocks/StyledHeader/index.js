import styled from 'styled-components/macro'
import Title from './Title'
import DropDownMenu from './DropDownMenu'
import Button from './Button'
import StyledLink from '../StyledLink'

const StyledHeader = styled.div`
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  width: 100%;
  height: 30px;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
`

StyledHeader.Title = Title
StyledHeader.DropDownMenu = DropDownMenu
StyledHeader.Button = Button
StyledHeader.Link = StyledLink

export default StyledHeader
