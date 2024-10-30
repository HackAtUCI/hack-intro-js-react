import React, { useState } from 'react';

const WeatherDisplay = () => {
  // TODO: Exercise Part 1 - Create two state variables
  // One for temperature (starting at 75)
  // One for weather condition (starting as 'sunny')
  // Hint: const [temperature, setTemperature] = useState(75);
  // Hint: const [condition, setCondition] = useState('sunny');
  

  // These functions will handle our button clicks
  const increaseTemp = () => {
    // TODO: Exercise Part 2 - Increase temperature by 1
    // Hint: setTemperature(previousTemp => previousTemp + 1)
    
  };

  const decreaseTemp = () => {
    // TODO: Exercise Part 3 - Decrease temperature by 1
    // Hint: setTemperature(previousTemp => previousTemp - 1)
    
  };

  // This function will handle weather condition changes
  const changeWeather = (newCondition) => {
    // TODO: Exercise Part 4 - Update the weather condition
    // Hint: setCondition(newCondition)
    
  };

  // Helper function to show weather emoji
  const getWeatherEmoji = () => {
    switch (condition) {
      case 'sunny': return '☀️';
      case 'cloudy': return '☁️';
      case 'rainy': return '🌧️';
      default: return '☀️';
    }
  };

  return (
    <div>
      <h2>🏖️ Beach Weather Report</h2>
      
      {/* Display temperature and weather */}
      <h3>
        {/* TODO: Exercise Part 5 - Display the temperature */}
        {/* Hint: {temperature}°F */}
        {/* TODO: Exercise Part 6 - Display the emoji */}
        {/* Hint: {getWeatherEmoji()} */}
      </h3>

      {/* Temperature control buttons */}
      <div>
        {/* TODO: Exercise Part 7 - Add onClick handlers to these buttons */}
        <button>➕ Warmer</button>
        <button>➖ Cooler</button>
      </div>

      {/* Weather condition buttons */}
      <div>
        {/* TODO: Exercise Part 8 - Add onClick handlers to these buttons */}
        <button>☀️ Sunny</button>
        <button>☁️ Cloudy</button>
        <button>🌧️ Rainy</button>
      </div>
    </div>
  );
};

export default WeatherDisplay;



/* ------ SOLUTION BELOW! Don't peek unless you need to! 😊 ------ */




/*
SOLUTION:

import React, { useState } from 'react';

const WeatherDisplay = () => {
  const [temperature, setTemperature] = useState(75);
  const [condition, setCondition] = useState('sunny');

  const increaseTemp = () => {
    setTemperature(prevTemp => prevTemp + 1);
  };

  const decreaseTemp = () => {
    setTemperature(prevTemp => prevTemp - 1);
  };

  const changeWeather = (newCondition) => {
    setCondition(newCondition);
  };

  const getWeatherEmoji = () => {
    switch (condition) {
      case 'sunny': return '☀️';
      case 'cloudy': return '☁️';
      case 'rainy': return '🌧️';
      default: return '☀️';
    }
  };

  return (
    <div>
      <h2>🏖️ Beach Weather Report</h2>
      
      <h3>
        {temperature}°F {getWeatherEmoji()}
      </h3>

      <div>
        <button onClick={increaseTemp}>➕ Warmer</button>
        <button onClick={decreaseTemp}>➖ Cooler</button>
      </div>

      <div>
        <button onClick={() => changeWeather('sunny')}>☀️ Sunny</button>
        <button onClick={() => changeWeather('cloudy')}>☁️ Cloudy</button>
        <button onClick={() => changeWeather('rainy')}>🌧️ Rainy</button>
      </div>
    </div>
  );
};

export default WeatherDisplay;
*/