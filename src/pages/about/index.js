import React from 'react'
import { Link } from 'react-router-dom'
import StyledColumn from '../../components/blocks/StyledColumn'
import H1 from '../../components/elements/H1'
import P from '../../components/elements/P'

const About = () => (
  <StyledColumn>
    <H1>Welcome to Deep Chat application!</H1>
    <P>
      Deep Chat is a chat application where you can create your own chat
      channels or join chat channels created by other registered users.
    </P>
    <P>
      To use Deep Chat you need to <Link to="/register">register</Link>. <br />
      If you already have an user account please <Link to="/login">login</Link>.
    </P>
  </StyledColumn>
)
export default About
