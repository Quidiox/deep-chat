import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const activeClassName = 'nav-link-active'

const StyledLink = styled(NavLink).attrs({
  activeClassName
})`
  padding: 2px 2px 0 2px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    background-color: lightgray;
    color: blue;
  }
  &.${activeClassName} {
    color: green;
    &::after {
      content: '\u2713';
      float: right;
      height: 20px;
    }
  }
`

export default StyledLink
