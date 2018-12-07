import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Login from './pages/auth/Login'
import CreateUser from './pages/user/Create'
import Header from './pages/header/Header'
import { requestVerifyUserToken } from './reducers/userReducer'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={CreateUser} />
          </Switch>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = { requestVerifyUserToken }

const mapStateToProps = state => ({ user: state.user })

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
