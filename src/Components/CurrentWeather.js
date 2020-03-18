import React from "react";
import mapWeatherIcon from "../util/mapWeatherIcon.js";

function CurrentWeather(props) {
  const currentTemp = Math.round(props.currentWeather.temperature);
  const icon = props.currentWeather.icon;
  const date = new Date();
  const day_name = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ][date.getDay()];
  const day_number = date.getDate();

  return (
    <div>
      <div id="day-banner">
        <span>{day_name + ", " + day_number}</span>
      </div>
      <div id="current-weather">
        <div id="current-temperature">
          <span>{props.city}</span>
          <span>+{currentTemp}°</span>
        </div>
        <div id="current-icon">
          <i className={mapWeatherIcon(icon)}></i>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
