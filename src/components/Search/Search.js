import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLat: '',
      userLong: ''
    }
  }

  manageChange = (event) => {
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  manageSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.setLocation(this.state)
    this.setState({
      userLat: '',
      userLong: ''
    })
  }


  render() {
    return (
      <form className="search" onSubmit={this.manageSubmit}>
        <h1 className="title">Find Your Weather</h1>
        <input 
          type="text" 
          name="userLat"
          placeholder="Enter Latitude" 
          value={this.state.userLat}
          onChange={this.manageChange}
         />
          <input 
          type="text" 
          name="userLong"
          placeholder="Enter Longitude" 
          value={this.state.userLong}
          onChange={this.manageChange}
         />
        <button>Submit</button> 
      </form>
      )
  }
}