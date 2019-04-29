import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import StyledChatPage from '../../components/blocks/StyledChatPage'
import Chatroom from './chatroom'
import Channels from './channels'
import { requestLoadAllChannels } from '../../reducers/channelsReducer'

const Chat = ({ requestLoadAllChannels, channels }) => {
  const [selected, setSelected] = useState()
  const [tabRowHeight, setTabRowHeight] = useState(21)
  const getTabRowHeight = height => {
    setTabRowHeight(height)
  }
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
  const changeSelected = id => {
    setSelected(id)
  }
  return (
    <StyledChatPage>
      <Channels
        getTabRowHeight={getTabRowHeight}
        channels={channels}
        selected={selected}
        changeSelected={changeSelected}
      />
      <Chatroom channelId={selected} tabRowHeight={tabRowHeight} />
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
