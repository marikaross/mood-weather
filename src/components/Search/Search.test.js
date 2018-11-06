import Search from './Search.js';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('Search', () => {
  let wrapper,
  mockManageChange,
  mockManageSubmit,
  mockSetLocation,
  mockSetLocalStorage,
  mockState;

  beforeEach(() => {
    mockManageChange = jest.fn();
    mockManageSubmit = jest.fn();
    mockSetLocation = jest.fn();
    mockSetLocalStorage = jest.fn();
    mockState = {userLong: '', userLong: ''};

    wrapper = shallow(<Search 
      manageChange={mockManageChange}
      manageSubmit={mockManageSubmit}
      setLocalStorage={mockSetLocalStorage}
      setLocation={mockSetLocation}
      state={mockState}
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the userLat field', () => {
    const mockEvent = { target: { value: 'somewhere', name: 'userLat' } }
    const expectedState = {userLat: 'somewhere', userLong: ''}
    wrapper.instance().manageChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  })


  it('should update the userLong field', () => {
    const mockEvent = { target: { value: 'somewhere else', name: 'userLong' } }
    const expectedState = {userLat: '', userLong: 'somewhere else'}

    wrapper.instance().manageChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  })

  it('should call manageSubmit with the correct props', () => {
    const mockEvent = { preventDefault: jest.fn() }
    const mockState = {userLat: '36.974117', userLong: '-122.030792'}
    wrapper.setState(mockState)

    wrapper.instance().manageSubmit(mockEvent)
    expect(mockManageSubmit).toBeCalledWith(mockState);
  })

})