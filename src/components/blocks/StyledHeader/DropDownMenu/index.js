import styled from 'styled-components/macro'

const DropDownMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  background-color: white;
  width: ${props => props.width || '100px'};
  height: ${props => props.height || 'auto'};
  min-height: 20px;
  border: 1px solid lightgray;
  right: ${props => props.right && '0'};
  margin: 5px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: pointer;
`

export default DropDownMenu
