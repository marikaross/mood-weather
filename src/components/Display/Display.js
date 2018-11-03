import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';


const Display = ({conditions}) => {
    console.log(conditions)

  return(
    <div className="display"> 
       <ReactAnimatedWeather
        icon={conditions.icon}
        color={'black'}
        size={100}
        animate={true}
      />
      <h3>{conditions.temperature}</h3>
      <h4>{conditions.summary}</h4>
    </div>

    )
}

export default Display;