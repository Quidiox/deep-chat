import React from 'react'
import StyledMemberList from '../../../../components/blocks/StyledMemberList'

const MemberList = React.memo(({ members, changeMemberListVisibility }) => {
  if (members && members.length > 0) {
    return (
      <StyledMemberList onClick={changeMemberListVisibility}>
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
