import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import apiKey from '../../apiKey.js';
import mockRawData from '../../helper.js';



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
      setConditions={mockSetConditions}
      snakeCase={mockSnakeCase}
      getWeather={mockGetWeather}
      />)

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
        { json: () => Promise.resolve(mockRawData) }
        )
    )
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

  it.skip('should call getWeather with the correct params', async () => {
    const locationInfo = {userLat: 42.3601, userLong: -71.0589}
    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKey}/${locationInfo.userLat}
      ,${locationInfo.userLong}?exclude=minutely,hourly,daily,alerts,flags`
    const expected = fetch(url, 
      {method: 'GET',
       headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
      })
    await wrapper.instance().getWeather(locationInfo)
    expect(window.fetch).toHaveBeenCalledWith(expected)  
        
  })

  it('should set the state with clean response weather data', () => {
    const expected = {
      conditions :{ 
      "summary": "Drizzle",
      "icon": "RAIN",
      "temperature": 66.1},
      location: {}
    }
    wrapper.instance().setConditions(mockRawData)
    expect(wrapper.state()).toEqual(expected)
  })
})



