import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './pages/auth/Login'
import Logout from './pages/auth/Logout'
import CreateUser from './pages/user/create'
import EditUser from './pages/user/profile/edit'
import DeleteUser from './pages/user/profile/delete'
import Profile from './pages/user/profile'
import Header from './pages/header'
import About from './pages/about'
import Chat from './pages/chat'
import Home from './pages/home'
import NotFound from './NotFound'
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
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={CreateUser} />
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Route path="/chat" component={Chat} />
          <Route path="/user/edit" component={EditUser} />
          <Route path="/user/delete" component={DeleteUser} />
          <Route path="*" component={NotFound} />
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
