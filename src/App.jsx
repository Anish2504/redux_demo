import React, { Component } from 'react'
import { connect } from "react-redux";

 class App extends Component {
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
const mapStateToProps = (state) => {
  return {
    state: state
}
}
export default connect(mapStateToProps) (App);
