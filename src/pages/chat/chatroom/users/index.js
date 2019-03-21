import React from 'react'
import UL from '../../../../components/elements/UL'
import LI from '../../../../components/elements/LI'

const Users = props => (
  <UL>
    {props.users.map(user => (
      <LI key={user.id}>{user.name}</LI>
    ))}
  </UL>
)

export default Users
