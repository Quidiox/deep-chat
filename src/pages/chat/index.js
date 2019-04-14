import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StyledChatPage from '../../components/blocks/StyledChatPage'
import Chatroom from './chatroom'
import Channels from './channels'
import { requestLoadAllChannels } from '../../reducers/channelReducer'
import { watchEvents, watchActions } from '../../sagas/channelSagas'
import { runSaga } from '../../reducers/store'

const Chat = ({ requestLoadAllChannels, channels }) => {
  useEffect(() => {
    runSaga(watchActions)
    runSaga(watchEvents)
    requestLoadAllChannels()
  }, [])
  return (
    <StyledChatPage>
      <Channels channels={channels} />
      <Chatroom />
    </StyledChatPage>
  )
}

const mapStateToProps = state => ({
  channels: state.channels
})
const mapDispatchToProps = { requestLoadAllChannels }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
