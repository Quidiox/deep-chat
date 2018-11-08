import styled from 'styled-components'
import Title from './Title'
import StyledMenu from '../StyledMenu'
import DropDownMenu from './DropDownMenu'
import Button from './Button'

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
StyledHeader.StyledMenu = StyledMenu
StyledHeader.DropDownMenu = DropDownMenu
StyledHeader.Button = Button

export default StyledHeader
