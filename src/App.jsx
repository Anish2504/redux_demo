import React, { Component } from 'react'

export default class App extends Component {
  state ={
    message: 'This is from component state'
  }
  
  
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
      </>
    )
  }
}
