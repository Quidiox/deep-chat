import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StyledColumn from '../../components/blocks/StyledColumn'
import H1 from '../../components/elements/H1'
import P from '../../components/elements/P'

class FrontPage extends Component {
  render() {
    return (
      <>
        <StyledColumn>
          <H1>Welcome to Deep Chat application!</H1>
          <P>
            Deep Chat is a chat application where you can chat with others.
            <br />
            You can create your own channels or join channels created by others
          </P>
          <P>
            To use Deep Chat you need to <Link to="/register">register</Link>.{' '}
            <br />
            If you already have an user account please{' '}
            <Link to="/login">login</Link>.
          </P>
        </StyledColumn>
      </>
    )
  }
}

export default FrontPage
