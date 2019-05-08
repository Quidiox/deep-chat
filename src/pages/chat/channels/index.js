import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import StyledChannelsRow from '../../../components/blocks/StyledChannelsRow'
import Join from './join'
import {
  requestUserJoinChannel,
  requestUserLeaveChannel
} from '../../../reducers/channelsReducer'

const Channels = React.memo(
  ({
    requestUserJoinChannel,
    requestUserLeaveChannel,
    channels,
    selected,
    changeSelected,
    getChannelsRowHeight
  }) => {
    const [open, setOpen] = useState(false)
    const channelsRowRef = useRef(null)
    useEffect(() => {
      getChannelsRowHeight(channelsRowRef.current.clientHeight)
    })
    const joinModalOpen = () => {
      setOpen(!open)
    }
    const joinChannel = name => {
      requestUserJoinChannel(name)
    }
    const handleChannelChange = id => e => {
      changeSelected(id)
    }
    const leaveChannel = id => () => {
      requestUserLeaveChannel(id)
    }
    return (
      <>
        <StyledChannelsRow ref={channelsRowRef}>
          {channels &&
            channels[0] &&
            channels[0].id &&
            channels.map(channel => {
              return (
                <StyledChannelsRow.LI
                  key={channel.id}
                  onClick={handleChannelChange(channel.id)}
                  selected={channel.id === selected ? true : false}
                >
                  {channel.name}
                  <StyledChannelsRow.ICON
                    icon="times"
                    selected={channel.id === selected ? true : false}
                    onClick={leaveChannel(channel.id)}
                  />
                </StyledChannelsRow.LI>
              )
            })}
          <StyledChannelsRow.LI key="join" join onClick={joinModalOpen}>
            Join channel
          </StyledChannelsRow.LI>
        </StyledChannelsRow>
        <Join
          open={open}
          joinModalOpen={joinModalOpen}
          joinChannel={joinChannel}
        />
      </>
    )
  }
)

const mapDispatchToProps = { requestUserJoinChannel, requestUserLeaveChannel }

export default connect(
  null,
  mapDispatchToProps
)(Channels)
