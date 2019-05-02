import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import StyledChannelsRow from '../../../components/blocks/StyledChannelsRow'
import Join from './join'
import { requestUserJoinChannel } from '../../../reducers/channelsReducer'

const Channels = React.memo(
  ({
    requestUserJoinChannel,
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
                  <StyledChannelsRow.A>{channel.name}</StyledChannelsRow.A>
                </StyledChannelsRow.LI>
              )
            })}
          <StyledChannelsRow.LI key="join" join onClick={joinModalOpen}>
            <StyledChannelsRow.A>Join channel</StyledChannelsRow.A>
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

const mapDispatchToProps = { requestUserJoinChannel }

export default connect(
  null,
  mapDispatchToProps
)(Channels)
