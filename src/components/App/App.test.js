import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  let wrapper, 
  mockSetLocation,
  mockSnakeCase,
  mockSetConditions,
  mockGetWeather,
  mockLocation,
  mockConditons;

  beforeEach(() => {
    mockSetLocation = jest.fn();
    mockSnakeCase = jest.fn();
    mockSetConditions = jest.fn();
    mockGetWeather = jest.fn();
    mockLocation = {userLat: 40.016457, userLong: -105.285884}
    mockConditons = {{icon: 'FOG', temperature: 1000, summary: 'Hell'}}
  })
})
