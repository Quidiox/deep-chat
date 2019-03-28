import styled from 'styled-components/macro'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 400px;
  max-width: 100%;
  max-height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010;
  background: rgba(0, 0, 0, 0.6);
`

export default Overlay
