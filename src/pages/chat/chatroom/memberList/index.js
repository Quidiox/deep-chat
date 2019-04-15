import React from 'react'
import StyledMemberList from '../../../../components/blocks/StyledMemberList'

const MemberList = ({ members, channelId }) => {
  if (
    members &&
    channelId &&
    members[channelId] &&
    members[channelId].members
  ) {
    return (
      <StyledMemberList>
        {members[channelId].members.map(member => (
          <StyledMemberList.LI key={member.id}>
            {member.name}
          </StyledMemberList.LI>
        ))}
      </StyledMemberList>
    )
  }
  return (
    <StyledMemberList>
      <StyledMemberList.LI>no members</StyledMemberList.LI>
    </StyledMemberList>
  )
}

export default MemberList
