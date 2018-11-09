import styled from 'styled-components/macro'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  // display should be block when modal is open
  display: ${props => props.display || 'none'};
`

export default Overlay
