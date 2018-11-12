import styled from 'styled-components/macro'
import Inner from './Inner'
import Overlay from './Overlay'

const Modal = styled.div`
  z-index: 1010;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 400px;
  max-height: 100%;
  width: 400px;
  max-width: 100%;
  // display should be flex when modal is open
  display: ${props => props.display || 'none'};
  flex-direction: column;
`

Modal.Inner = Inner
Modal.Overlay = Overlay

export default Modal
