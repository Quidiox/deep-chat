import React from 'react'
import StyledMemberList from '../../../../components/blocks/StyledMemberList'

const MemberList = React.memo(
  ({ members, changeMemberListVisibility, activeMembers }) => {
    const memberLine = member => {
      const occurrences = activeMembers.reduce(
        (acc, val) => acc.set(val, 1 + (acc.get(val) || 0)),
        new Map()
      )
      console.log(occurrences)
      return (
        <StyledMemberList.P
          active={activeMembers.find(nickname => member.nickname === nickname)}
        >
          {member.nickname}{' '}
          {occurrences.get(member.nickname) > 1 &&
            occurrences.get(member.nickname)}
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
