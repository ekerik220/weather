import React from "react";
import mapWeatherIcon from "../util/mapWeatherIcon.js";

function CurrentWeather(props) {
  const currentTemp = Math.round(props.currentWeather.temperature);
  const icon = props.currentWeather.icon;

  return (
    <div id="current-weather">
      <div id="current-temperature-box">
        <span id="city-name">{props.city}</span>
        <span id="current-temp">+{currentTemp}°</span>
      </div>
      <div id="current-icon">
        <i className={mapWeatherIcon(icon)}></i>
      </div>
    </div>
  );
}

export default CurrentWeather;
