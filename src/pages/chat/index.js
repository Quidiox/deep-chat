import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import StyledChatPage from '../../components/blocks/StyledChatPage'
import Chatroom from './chatroom'
import Channels from './channels'
import {
  requestLoadAllChannels,
  closeSocket
} from '../../reducers/channelsReducer'
import { watchActions } from '../../sagas/chatSagas'
import { runSaga } from '../../reducers/store'

const Chat = ({ requestLoadAllChannels, closeSocket, channels, user }) => {
  const [selected, setSelected] = useState()
  const [channelsRowHeight, setChannelsRowHeight] = useState(21)
  useEffect(
    () => {
      runSaga(watchActions)
      requestLoadAllChannels()
      return () => {
        closeSocket()
      }
    },
    [requestLoadAllChannels, closeSocket]
  )
  useEffect(
    () => {
      if (user && user.id && user.activeChannel) {
        setSelected(user.activeChannel)
      } else if (!user && !user.id && channels && channels[0]) {
        setSelected(channels[0].id)
      }
    },
    [user, channels]
  )
  const getChannelsRowHeight = height => {
    setChannelsRowHeight(height)
  }
  const changeSelected = id => {
    setSelected(id)
  }
  return (
    <StyledChatPage>
      <Channels
        getChannelsRowHeight={getChannelsRowHeight}
        channels={channels}
        selected={selected}
        changeSelected={changeSelected}
      />
      <Chatroom channelId={selected} channelsRowHeight={channelsRowHeight} />
    </StyledChatPage>
  )
}

const mapStateToProps = state => ({
  channels: state.channels,
  user: state.user
})
const mapDispatchToProps = { requestLoadAllChannels, closeSocket }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
