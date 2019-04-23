import React from 'react'
import StyledColumn from '../../components/blocks/StyledColumn'
import H1 from '../../components/elements/H1'
import P from '../../components/elements/P'

const Home = () => (
  <StyledColumn>
    <H1>Home</H1>
    <P>
      You can create and join new channels from here. Currently you have joined
      5 channels of which you have created 3.
    </P>
  </StyledColumn>
)

export default Home
