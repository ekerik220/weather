import React from 'react';
import './App.css';
import CurrentWeather from './Components/CurrentWeather';
import HourlyWeather from './Components/HourlyWeather';
import SecondaryWeather from './Components/SecondaryWeather';
import WeeklyWeather from './Components/WeeklyWeather';

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <HourlyWeather />
      <SecondaryWeather />
      <WeeklyWeather />
    </div>
  );
}

export default App;
