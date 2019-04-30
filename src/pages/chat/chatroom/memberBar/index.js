import React from 'react'
import StyledMembersBar from '../../../../components/blocks/StyledMembersBar'

const MemberBar = ({
  activeMembers,
  totalMembers,
  changeMemberListVisibility
}) => {
  return (
    <StyledMembersBar>
      <StyledMembersBar.P>
        There are {activeMembers} / {totalMembers} members active.
      </StyledMembersBar.P>
      <StyledMembersBar.ICON
        icon="users"
        onClick={changeMemberListVisibility}
      />
    </StyledMembersBar>
  )
}

export default MemberBar
