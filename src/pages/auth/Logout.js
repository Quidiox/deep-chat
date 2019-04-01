import React from 'react'
import { connect } from 'react-redux'
import { requestLogoutUser } from '../../reducers/userReducer'

const Logout = ({ requestLogoutUser }) => {
  requestLogoutUser()
  return <></>
}

const mapDispatchToProps = { requestLogoutUser }

export default connect(
  null,
  mapDispatchToProps
)(Logout)
