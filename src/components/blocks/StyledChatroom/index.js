import styled from 'styled-components/macro'

const StyledChatroom = styled.div`
  height: calc(100vh - ${props => props.messageListHeightModifier}px);
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export default StyledChatroom
