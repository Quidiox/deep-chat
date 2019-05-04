import styled from 'styled-components/macro'
import PopUp from './PopUp'
import Button from './Button'
import P from './P'
import H2 from './H2'

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
StyledModal.Button = Button
StyledModal.P = P
StyledModal.H2 = H2

export default StyledModal
