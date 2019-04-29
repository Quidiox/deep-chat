import React from 'react'
import StyledMemberList from '../../../../components/blocks/StyledMemberList'

const MemberList = React.memo(({ members }) => {
  // console.log(members, channelId)
  if (members && members.length > 0) {
    return (
      <StyledMemberList>
        {members.map(member => (
          <StyledMemberList.LI key={member.id}>
            <StyledMemberList.P>{member.name}</StyledMemberList.P>
          </StyledMemberList.LI>
        ))}
      </StyledMemberList>
    )
  }
})

export default MemberList
