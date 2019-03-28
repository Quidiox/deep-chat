import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './pages/auth/Login'
import CreateUser from './pages/user/create'
import Profile from './pages/user/profile'
import Header from './pages/header'
import About from './pages/about'
import Chat from './pages/chat'
import Home from './pages/home'
import { requestVerifyUserToken } from './reducers/userReducer'
import GlobalStyle from './theme/globalStyles'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={CreateUser} />
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Route path="/chat" component={Chat} />
        </Switch>
        <GlobalStyle />
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
