import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Login from './pages/auth/login'
import Logout from './pages/auth/logout'
import CreateUser from './pages/user/create'
import EditUser from './pages/user/profile/edit'
import DeleteUser from './pages/user/profile/delete'
import Profile from './pages/user/profile'
import Header from './pages/header'
import About from './pages/about'
import Chat from './pages/chat'
import Home from './pages/home'
import Error from './pages/error'
import NotFound from './pages/notfound'
import GlobalStyle from './theme/globalStyles'
import { requestVerifyAuthCookie } from './reducers/userReducer'
import { clearError } from './reducers/errorReducer'
import { watchActions } from './sagas/chatSagas'
import { runSaga } from './reducers/store'
import PrivateRoute from './utils/privateRoute'

const App = ({ user, error, requestVerifyAuthCookie, clearError }) => {
  useEffect(
    () => {
      async function init() {
        await requestVerifyAuthCookie()
      }
      init()
    },
    [requestVerifyAuthCookie]
  )
  useEffect(() => {
    async function init() {
      await runSaga(watchActions)
    }
    init()
  }, [])
  return (
    <>
      {error && <Error error={error} clearError={clearError} />}
      <Header />
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
        <PrivateRoute
          path="/profile"
          component={Profile}
          loggedIn={user && user.id}
        />
        <PrivateRoute
          path="/home"
          component={Home}
          loggedIn={user && user.id}
        />
        <PrivateRoute
          path="/chat"
          component={Chat}
          loggedIn={user && user.id}
        />
        } />
        <PrivateRoute
          path="/user/edit"
          component={EditUser}
          loggedIn={user && user.id}
        />
        <PrivateRoute
          path="/user/delete"
          component={DeleteUser}
          loggedIn={user && user.id}
        />
        <Route path="*" render={props => <NotFound {...props} user={user} />} />
      </Switch>
      <GlobalStyle />
    </>
  )
}

const mapStateToProps = state => ({ user: state.user, error: state.error })
const mapDispatchToProps = {
  requestVerifyAuthCookie,
  clearError
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
