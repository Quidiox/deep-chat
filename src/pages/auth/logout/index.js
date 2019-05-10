import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { requestLogoutUser } from '../../../reducers/userReducer'

const Logout = ({ requestLogoutUser }) => {
  requestLogoutUser()
  return <Redirect to="/" />
}

const mapDispatchToProps = { requestLogoutUser }

export default connect(
  null,
  mapDispatchToProps
)(Logout)
