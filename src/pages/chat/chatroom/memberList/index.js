import React from 'react'
import StyledMemberList from '../../../../components/blocks/StyledMemberList'

const MemberList = React.memo(
  ({ members, changeMemberListVisibility, activeMembers }) => {
    const memberLine = member => {
      return (
        <StyledMemberList.P
          active={activeMembers.find(username => member.name === username)}
        >
          {member.name}
        </StyledMemberList.P>
      )
    }
    if (members && members.length > 0) {
      return (
        <StyledMemberList onClick={changeMemberListVisibility}>
          {members.map(member => (
            <StyledMemberList.LI key={member.id}>
              {memberLine(member)}
            </StyledMemberList.LI>
          ))}
        </StyledMemberList>
      )
    }
  }
)

export default MemberList
