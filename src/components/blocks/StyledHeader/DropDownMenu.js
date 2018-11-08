import styled from 'styled-components'

const DropDownMenu = styled.div`
  z-index: 1200;
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '200px'};
  border: 1px solid black;
  background: lightgray;
  position: absolute;
  top: 30px;
  right: ${props => (props.right ? '0' : '')};
  margin: 5px;
  border-radius: 5px;
`

export default DropDownMenu
