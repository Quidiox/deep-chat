import React from 'react'
import StyledMemberList from '../../../../components/blocks/StyledMemberList'

const MemberList = ({ members, channelId }) => {
  // console.log(members, channelId)
  if (
    members &&
    channelId &&
    members[channelId] &&
    members[channelId].members &&
    members[channelId].members.length > 0
  ) {
    return (
      <StyledMemberList>
        {members[channelId].members.map(member => (
          <StyledMemberList.LI key={member.id}>
            <StyledMemberList.P>{member.name}</StyledMemberList.P>
          </StyledMemberList.LI>
        ))}
      </StyledMemberList>
    )
  }
  return (
    <StyledMemberList>
      <StyledMemberList.LI>
        <StyledMemberList.P>no members</StyledMemberList.P>
      </StyledMemberList.LI>
    </StyledMemberList>
  )
}

export default MemberList
