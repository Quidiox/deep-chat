import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const activeClassName = 'nav-link-active'

const StyledLink = styled(NavLink).attrs({
  activeClassName
})`
  margin: 2px;
  padding: 1px 1px 1px 10px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    background-color: lightgray;
    color: blue;
  }
  &.${activeClassName} {
    color: green;
    border: 1px solid green;
    border-radius: 3px;
  }
`

export default StyledLink
