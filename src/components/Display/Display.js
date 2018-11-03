import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import PropTypes from 'prop-types';
import './Display.css';


const Display = ({conditions}) => {

  return(
    <div className="display"> 
       <ReactAnimatedWeather
        icon={conditions.icon}
        color={'#61dafb'}
        size={275}
        animate={true}
      />
      <h3>{conditions.temperature}&#8457;</h3>
      <h4>{conditions.summary}</h4>
    </div>

    )
}


Display.propTypes = {
  conditions: PropTypes.object.isRequired
};

export default Display;