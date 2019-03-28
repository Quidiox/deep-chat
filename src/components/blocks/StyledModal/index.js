import styled from 'styled-components/macro'
import Inner from './Inner'
import Overlay from './Overlay'

const Modal = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 255, 0.5);
`

Modal.Inner = Inner
Modal.Overlay = Overlay

export default Modal
