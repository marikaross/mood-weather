import React, { Component } from 'react';
import Search from '../Search/Search.js';
import apiKey from '../../apiKey.js'; 
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: {}
    }
  }

  componentDidMount() {

  }

  setLocation = (coordinates) => {
    this.setState({location: coordinates})
  }

  getWeather = async () => {
    const allInfo = await fetch(`https://api.darksky.net/forecast/${apiKey}/${this.state.location.userLat},${this.state.location.userLong}`)
    const response = await allInfo.json()

  }

  render() {
    return (
      <div className="App">
        <Search setLocation={this.setLocation}/>
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
