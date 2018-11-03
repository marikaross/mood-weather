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
        <h1 className="title">Weatherly</h1>
        <input 
          type="text" 
          placeholder="Enter Latitude" 
          value={this.state.userLat}
          onChange={this.getInput}
         />
          <input 
          type="text" 
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