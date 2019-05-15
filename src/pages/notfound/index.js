import React from 'react'
import StyledNotFound from '../../components/blocks/StyledNotFound'

const NotFound = ({ user }) => (
  <StyledNotFound>
    <StyledNotFound.P>Error 404. Page not found.</StyledNotFound.P>
    <StyledNotFound.P>
      {user && user.id ? (
        <StyledNotFound.Link to="/home">Home sweet home.</StyledNotFound.Link>
      ) : (
        <StyledNotFound.Link to="/">
          About time to help you around.
        </StyledNotFound.Link>
      )}
    </StyledNotFound.P>
  </StyledNotFound>
)

export default NotFound
