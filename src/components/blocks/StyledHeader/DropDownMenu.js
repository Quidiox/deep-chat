import styled from 'styled-components/macro'
import UL from '../../elements/UL'

const DropDownMenu = styled(UL)`
  z-index: 1000;
  width: ${props => props.width || '100px'};
  height: ${props => props.height || 'auto'};
  min-height: 20px;
  border: 1px solid black;
  right: ${props => (props.right ? '0' : '')};
  margin: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: pointer;
`

export default DropDownMenu
