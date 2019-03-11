import React, { Component } from 'react'
import io from 'socket.io-client'

class Chat extends Component {
  constructor(props) {
    super(props)
    this.socket = io('http://backend.deep-chat.com', { path: '/server' })
  }
  render() {
    this.socket.on('connect', () => {
      this.socket.emit('message', 'hello world!!!111!!')
      this.socket.on('hi', msg => console.log(msg))
    })
    return <div>Hello World!</div>
  }
}

export default Chat
