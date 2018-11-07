import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import PropTypes from 'prop-types';
import './Display.css';


const Display = ({conditions}) => {

  return (
    <div className="display"> 
      <h3 className="conditions">{conditions.timezone}</h3>
      <ReactAnimatedWeather
        icon={conditions.icon}
        color={'#61dafb'}
        size={275}
        animate={true}
      />
      <h3>{conditions.temperature}&#8457;</h3>
      <h4>{conditions.summary}</h4>
    </div>

  );
};


Display.propTypes = {
  conditions: PropTypes.object.isRequired
};

ReactAnimatedWeather.propTypes = {
  icon: PropTypes.oneOf([
    'CLEAR_DAY',
    'CLEAR_NIGHT',
    'PARTLY_CLOUDY_DAY',
    'PARTLY_CLOUDY_NIGHT',
    'CLOUDY',
    'RAIN',
    'SLEET',
    'SNOW',
    'WIND',
    'FOG'
  ]),
  animate: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string
};

export default Display;