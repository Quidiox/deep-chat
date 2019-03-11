import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './pages/auth/Login'
import CreateUser from './pages/user/Create'
import Header from './pages/header'
import FrontPage from './pages/frontpage'
import Chat from './pages/chat'
import { requestVerifyUserToken } from './reducers/userReducer'
import GlobalStyle from './theme/globalStyles'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={CreateUser} />
          <Route path="chat" component={Chat} />
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
