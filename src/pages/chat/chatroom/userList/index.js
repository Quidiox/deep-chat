import React from 'react'
import StyledUserList from '../../../../components/blocks/StyledUserList'

const UserList = ({ users }) => (
  <StyledUserList>
    {users.map(user => (
      <StyledUserList.LI key={user.id}>{user.name}</StyledUserList.LI>
    ))}
  </StyledUserList>
)

export default UserList
