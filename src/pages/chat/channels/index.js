import React, { useState } from 'react'
import StyledTabRow from '../../../components/blocks/StyledTabRow'
import Join from './join'

const Channels = ({ channels }) => {
  const [selected, setSelected] = useState(channels[0].id)
  const [open, setOpen] = useState(false)
  const changeSelected = id => () => {
    setSelected(id)
  }
  const joinModalOpen = () => {
    console.log(open)
    setOpen(!open)
  }
  return (
    <>
      <StyledTabRow>
        {channels.map(channel => {
          return (
            <StyledTabRow.LI
              key={channel.id}
              onClick={changeSelected(channel.id)}
              selected={channel.id === selected ? true : false}
            >
              <StyledTabRow.A>{channel.title}</StyledTabRow.A>
            </StyledTabRow.LI>
          )
        })}
        <StyledTabRow.LI key="join" join onClick={joinModalOpen}>
          <StyledTabRow.A>Join channel</StyledTabRow.A>
        </StyledTabRow.LI>
      </StyledTabRow>
      <Join open={open} joinModalOpen={joinModalOpen} />
    </>
  )
}

export default Channels
