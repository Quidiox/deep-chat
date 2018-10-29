import React, { Component, Fragment } from 'react'
import Login from './pages/auth/Login'
import Create from './pages/user/Create'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Login />
        <Create />
      </Fragment>
    )
  }
}

export default App
