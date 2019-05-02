import React from 'react'
import StyledMemberList from '../../../../components/blocks/StyledMemberList'

const MemberList = React.memo(
  ({ members, changeMemberListVisibility, activeMembers }) => {
    if (members && members.length > 0) {
      return (
        <StyledMemberList onClick={changeMemberListVisibility}>
          {members.map(member => (
            <StyledMemberList.LI key={member.id}>
              {activeMembers.find(username => member.name === username) ? (
                <StyledMemberList.P
                  style={{
                    color: 'darkgreen',
                    background: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {member.name}
                </StyledMemberList.P>
              ) : (
                <StyledMemberList.P>{member.name}</StyledMemberList.P>
              )}
            </StyledMemberList.LI>
          ))}
        </StyledMemberList>
      )
    }
  }
)

export default MemberList
