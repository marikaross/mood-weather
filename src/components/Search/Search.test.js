import Search from './Search.js';
import React from 'react';
import { shallow } from 'enzyme';

describe('Search', () => {
  let wrapper,
  mockManageChange,
  mockManageSubmit,
  mockSetLocation,
  mockState;

  beforeEach(() => {
    mockManageChange = jest.fn();
    mockManageSubmit = jest.fn();
    mockSetLocation = jest.fn();
    mockState = {userLat: '', userLong: ''};

    wrapper = shallow(<Search 
      manageChange={mockManageChange}
      manageSubmit={mockManageSubmit}
      setLocation={mockSetLocation}
      state={mockState}
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})