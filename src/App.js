import React, { Component } from 'react'
import io from 'socket.io-client'

class App extends Component {
  render() {
    const socket = io.connect('http://localhost:3005')
    console.log(socket)
    return <div>Hello World!</div>
  }
}

export default App
