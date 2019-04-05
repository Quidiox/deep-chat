import React, { useEffect } from 'react'
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
import Error from './pages/error'
import NotFound from './NotFound'
import GlobalStyle from './theme/globalStyles'
import { requestVerifyAuthCookie } from './reducers/userReducer'

const App = ({ user, error, requestVerifyAuthCookie }) => {
  useEffect(() => {
    requestVerifyAuthCookie()
  }, [])

  return (
    <>
      <Header />
      {error && <Error error={error} />}
      <Switch>
        <Route exact path="/" component={About} />
        <Route
          path="/login"
          render={props => <Login {...props} user={user} />}
        />
        <Route
          path="/register"
          render={props => <CreateUser {...props} user={user} />}
        />
        <Route path="/logout" component={Logout} />
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

const mapStateToProps = state => ({ user: state.user, error: state.error })
const mapDispatchToProps = { requestVerifyAuthCookie }

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
