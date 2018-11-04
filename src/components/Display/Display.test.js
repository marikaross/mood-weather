import Display from './Display.js';
import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { shallow } from 'enzyme';

describe('Display', () => {
  let wrapper, 
  mockConditions;

  beforeEach(() => {
    mockConditions = {icon: 'FOG', temperature: 1000, summary: 'Best day ever'}
    wrapper = shallow(<Display 
      conditions={mockConditions}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});