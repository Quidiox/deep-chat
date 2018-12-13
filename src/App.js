import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './pages/auth/Login'
import CreateUser from './pages/user/Create'
import Header from './pages/header/Header'
import FrontPage from './pages/frontpage/FrontPage'
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
