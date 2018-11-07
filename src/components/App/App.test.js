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

  it('should have a default state with location and conditions', () => {
    let expected = {
      location: {},
      conditions: {}
    }

    expect(wrapper.state('location')).toEqual(expected.location)
    expect(wrapper.state('conditions')).toEqual(expected.conditions)
  })

  it('should change the location in state based on user input', () => {
    const expected = {conditions: {}, location: {userLat: 40.016457, userLong: -105.285884}}
    wrapper.checkLocation = jest.fn()
    wrapper.instance().setLocation(mockLocation)
    expect(wrapper.state()).toEqual(expected)
  })

  it('should call getWeather with the appropriate url', () => {
     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        
      }),
  })


})
