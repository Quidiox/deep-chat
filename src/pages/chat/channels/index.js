import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import StyledTabRow from '../../../components/blocks/StyledTabRow'
import Join from './join'
import { requestUserJoinChannel } from '../../../reducers/channelReducer'

const Channels = ({ requestUserJoinChannel, channels }) => {
  const [selected, setSelected] = useState()
  useEffect(() => {
    setSelected(channels && channels[0] ? channels[0].id : '')
  }, [])
  const [open, setOpen] = useState(false)
  const changeSelected = id => () => {
    setSelected(id)
  }
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
