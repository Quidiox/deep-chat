import React from 'react'
import StyledMemberList from '../../../../components/blocks/StyledMemberList'

const MemberList = React.memo(
  ({ members, changeMemberListVisibility, activeMembers }) => {
    const memberLine = member => {
      // if same user has many clients connected at the same time
      const activeMemberOccurrences = activeMembers.reduce(
        (acc, val) => acc.set(val, 1 + (acc.get(val) || 0)),
        new Map()
      )
      return (
        <StyledMemberList.P
          active={activeMembers.find(nickname => member.nickname === nickname)}
        >
          {member.nickname}{' '}
          {activeMemberOccurrences.get(member.nickname) > 1 &&
            activeMemberOccurrences.get(member.nickname)}
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
