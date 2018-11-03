import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import './Display.css';


const Display = ({conditions}) => {
    console.log(conditions)

  return(
    <div className="display"> 
       <ReactAnimatedWeather
        icon={conditions.icon}
        color={'#61dafb'}
        size={300}
        animate={true}
      />
      <h3>{conditions.temperature}&#8457;</h3>
      <h4>{conditions.summary}</h4>
    </div>

    )
}

export default Display;