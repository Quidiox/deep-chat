import styled from 'styled-components/macro'
import Title from './Title'
import DropDownMenu from './DropDownMenu'
import DropDownContainer from './DropDownContainer'
import Button from './Button'
import DropDownMenuItem from './DropDownMenuItem'
import StyledLink from './StyledLink'

const StyledHeader = styled.div`
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  width: 100%;
  height: 30px;
  background-color: lightblue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

StyledHeader.Title = Title
StyledHeader.DropDownContainer = DropDownContainer
StyledHeader.DropDownMenu = DropDownMenu
StyledHeader.MenuIcon = Button
StyledHeader.MenuItem = DropDownMenuItem
StyledHeader.Link = StyledLink

export default StyledHeader
