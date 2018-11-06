import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';


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
    mockConditons = {icon: 'FOG', temperature: 1000, summary: 'Hell'}

    wrapper = shallow(<App 
      setLocation={mockSetLocation}
      setconditions={mockSetConditions}
      snakeCase={mockSnakeCase}
      getWeather={mockGetWeather}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
