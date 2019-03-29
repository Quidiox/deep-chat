import styled from 'styled-components/macro'
import PopUp from './PopUp'

const StyledModal = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 255, 0.5);
`

StyledModal.PopUp = PopUp

export default StyledModal
