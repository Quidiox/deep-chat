import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import StyledChatPage from '../../components/blocks/StyledChatPage'
import Chatroom from './chatroom'
import Channels from './channels'
import { requestLoadAllChannels } from '../../reducers/channelsReducer'
import { watchEvents, watchActions } from '../../sagas/chatSagas'
import { runSaga } from '../../reducers/store'

const Chat = ({ requestLoadAllChannels, channelTabs }) => {
  const [selected, setSelected] = useState('')
  useEffect(() => {
    runSaga(watchActions)
    runSaga(watchEvents)
    requestLoadAllChannels()
  }, [])
  const changeSelected = id => () => {
    setSelected(id)
  }
  return (
    <StyledChatPage>
      <Channels
        channelTabs={channelTabs}
        selected={selected}
        changeSelected={changeSelected}
      />
      <Chatroom channelId={selected} />
    </StyledChatPage>
  )
}

const mapStateToProps = state => ({
  channelTabs: state.channelTabs
})
const mapDispatchToProps = { requestLoadAllChannels }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
