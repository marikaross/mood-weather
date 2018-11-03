import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      userLat: '',
      userLong: ''
    }
  }

  getInput = (event) => {
  }

  


  render() {
    return (
      <div className="search">
        <h1 className="title">Find Your Weather</h1>
        <input 
          type="text" 
          name="userLat"
          placeholder="Enter Latitude" 
          value={this.state.userLat}
          onChange={this.getInput}
         />
          <input 
          type="text" 
          name="userLong"
          placeholder="Enter Longitude" 
          value={this.state.userLong}
          onChange={this.getInput}
         />
        <button onClick={(event) => {
          event.preventDefault()
          this.props.fetchWeather(this.state.userInput)
        }}

        >Submit</button> 
      </div>
      )
  }
}