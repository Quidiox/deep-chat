import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import StyledTabRow from '../../../components/blocks/StyledTabRow'
import Join from './join'
import { requestUserJoinChannel } from '../../../reducers/channelsReducer'

const Channels = ({
  requestUserJoinChannel,
  channels,
  selected,
  changeSelected
}) => {
  const [open, setOpen] = useState(false)
  useEffect(
    () => {
      if (channels && channels[0] && channels[0].id) {
        changeSelected(channels[0].id)()
      }
    },
    [channels]
  )
  const joinModalOpen = () => {
    setOpen(!open)
  }
  const joinChannel = name => {
    requestUserJoinChannel(name)
  }
  return (
    <>
      <StyledTabRow>
        {channels &&
          channels[0] &&
          channels[0].id &&
          channels.map(channel => {
            // console.log(channel.id)
            return (
              <StyledTabRow.LI
                key={channel.id}
                onClick={changeSelected(channel.id)}
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

const mapDispatchToProps = { requestUserJoinChannel }

export default connect(
  null,
  mapDispatchToProps
)(Channels)
