import styled from 'styled-components/macro'

const PopUp = styled.div`
  padding: 5px;
  position: fixed;
  width: 300px;
  height: 200px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  background: white;
  color: black;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1020;
`

export default PopUp
