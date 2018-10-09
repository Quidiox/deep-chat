import React, { Component } from 'react'
import io from 'socket.io-client'

class App extends Component {
  constructor(props) {
    super(props)
    this.socket = io('http://localhost:3005', { path: '/server' })
  }
  render() {
    this.socket.emit('message', 'hello world!!!111!!')
    this.socket.on('hi', msg => console.log(msg))
    return <div>Hello World!</div>
  }
}

export default App
