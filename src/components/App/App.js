import React, { Component } from 'react';
import Display from '../Display/Display.js';
import Search from '../Search/Search.js';
import apiKey from '../../apiKey.js'; 
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: {},
      conditions: {}
    }
  }

  componentDidMount() {
    this.getWeather()
  }

  setLocation = (coordinates) => {
    this.setState({location: coordinates})
  }

  setConditions = (response) => {
    console.log(response)
    this.setState({conditions: {
      temperature: response.currently.temperature,
      icon: response.currently.icon,
      summary: response.currently.summary
      }
    })
  }

  getWeather = async () => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/40.016457,-105.285884?exclude=minutely,hourly,daily,alerts,flags`
    const allInfo = await fetch(url, 
      {method: 'GET',
       headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
      })
    const response = await allInfo.json()
    const currentCondit = await this.setConditions(response)
  }

  render() {
    return (
      <div className="App">
        <Search setLocation={this.setLocation}/>
        <Display conditions={this.state.conditions}/>
        <header className="App-header">
          <a
            className="App-link"
            href="https://darksky.net/poweredby/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Dark Sky
          </a>
        </header>
      </div>
    );
  }
}

export default App;
