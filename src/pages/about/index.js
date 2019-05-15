import React from 'react'
import { Link } from 'react-router-dom'
import StyledColumn from '../../components/blocks/StyledColumn'
import H1 from '../../components/elements/H1'
import P from '../../components/elements/P'

const About = () => (
  <StyledColumn>
    <H1>Welcome to Deep Chat application!</H1>
    <P>
      Deep Chat is a typical chat application where you can chat on channels
      created by you and other users.
    </P>
    <P>
      To use Deep Chat you need to <Link to="/register">register</Link>. If you
      already have an user account please <Link to="/login">login</Link>.
    </P>
  </StyledColumn>
)

export default About
