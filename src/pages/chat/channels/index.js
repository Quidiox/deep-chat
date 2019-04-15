import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import StyledTabRow from '../../../components/blocks/StyledTabRow'
import Join from './join'
import { requestUserJoinChannel } from '../../../reducers/channelsReducer'

const Channels = ({
  requestUserJoinChannel,
  channelTabs,
  selected,
  changeSelected
}) => {
  const [open, setOpen] = useState(false)
  useEffect(
    () => {
      if (channelTabs && channelTabs[0]) {
        changeSelected(channelTabs[0].id)()
      }
    },
    [channelTabs]
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
        {channelTabs &&
          channelTabs[0] &&
          channelTabs[0].id &&
          channelTabs.map(channel => {
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
