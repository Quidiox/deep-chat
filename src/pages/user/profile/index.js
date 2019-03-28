import React from 'react'
import { Link } from 'react-router-dom'
import StyledColumn from '../../../components/blocks/StyledColumn'
import H1 from '../../../components/elements/H1'
import P from '../../../components/elements/P'

const Profile = () => {
  return (
    <StyledColumn>
      <H1>User profile page</H1>
      <P>
        This is your user account managements page where <br />
        you can <Link to="/user/edit">edit</Link> or{' '}
        <Link to="/user/delete">delete</Link> your user account.
      </P>
    </StyledColumn>
  )
}

export default Profile
