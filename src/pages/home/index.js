import React from 'react'
import StyledColumn from '../../components/blocks/StyledColumn'
import H1 from '../../components/elements/H1'
import P from '../../components/elements/P'

const Home = () => (
  <StyledColumn>
    <H1>Home</H1>
    <P style={{ padding: '0 40px' }}>
      Welcome to Deep Chat application! Deep Chat is a chat application where
      you can join channels created by others or create new channels and chat
      with people who have joined the same channel.
    </P>
  </StyledColumn>
)

export default Home
