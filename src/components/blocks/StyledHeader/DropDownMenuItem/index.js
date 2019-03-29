import styled from 'styled-components/macro'

const DropDownMenuItem = styled.li`
  padding: 2px;
  list-style: none;
  border-bottom: 1px solid black;
  &:last-of-type {
    border-bottom: none;
  }
`

export default DropDownMenuItem
