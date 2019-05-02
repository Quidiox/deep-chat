import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import StyledChatPage from '../../components/blocks/StyledChatPage'
import Chatroom from './chatroom'
import Channels from './channels'
import { requestLoadAllChannels } from '../../reducers/channelsReducer'

const Chat = ({ requestLoadAllChannels, channels }) => {
  const [selected, setSelected] = useState()
  const [channelsRowHeight, setChannelsRowHeight] = useState(21)
  useEffect(
    () => {
      requestLoadAllChannels()
    },
    [requestLoadAllChannels]
  )
  useEffect(
    () => {
      setSelected(
        channels && channels[0] && channels[0].id ? channels[0].id : ''
      )
    },
    [channels]
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
  channels: state.channels
})
const mapDispatchToProps = { requestLoadAllChannels }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
