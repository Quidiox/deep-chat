import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import StyledTabRow from '../../../components/blocks/StyledTabRow'
import Join from './join'
import { requestUserJoinChannel } from '../../../reducers/channelsReducer'

const Channels = React.memo(
  ({
    requestUserJoinChannel,
    channels,
    selected,
    changeSelected,
    getTabRowHeight
  }) => {
    const [open, setOpen] = useState(false)
    const tabRowRef = useRef(null)
    useEffect(() => {
      getTabRowHeight(tabRowRef.current.clientHeight)
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
        <StyledTabRow ref={tabRowRef}>
          {channels &&
            channels[0] &&
            channels[0].id &&
            channels.map(channel => {
              // console.log(channel.id)
              return (
                <StyledTabRow.LI
                  key={channel.id}
                  onClick={handleChannelChange(channel.id)}
                  selected={channel.id === selected ? true : false}
                >
                  <StyledTabRow.A>{channel.name}</StyledTabRow.A>
                </StyledTabRow.LI>
              )
            })}
          <StyledTabRow.LI key="join" join onClick={joinModalOpen}>
            <StyledTabRow.A>Join channel</StyledTabRow.A>
          </StyledTabRow.LI>
        </StyledTabRow>
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
