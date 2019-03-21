import React from 'react'
import StyledUsers from '../../../../components/blocks/StyledUsers'

const Users = ({ users }) => (
  <StyledUsers>
    {users.map(user => (
      <StyledUsers.LI key={user.id}>{user.name}</StyledUsers.LI>
    ))}
  </StyledUsers>
)

export default Users
