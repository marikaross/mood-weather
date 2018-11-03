import React, { Component } from 'react';
import Search from '../Search/Search.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {

  }

  getWeather

  render() {
    return (
      <div className="App">
        <Search />
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
