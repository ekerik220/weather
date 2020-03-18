import React from "react";
import mapWeatherIcon from "../util/mapWeatherIcon.js";


function WeeklyWeather(props) {
  const days = props.weeklyWeather.data.slice(1, 8); // Next 7 days after current day
  return (
    <div id="weekly-weather">
      {days.map(day => {
        const day_index = new Date(day.time * 1000).getDay();
        const day_name = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ][day_index];
        return (
          <div className="day" key={day_name}>
            <span className="day-name">{day_name}</span>
            <i className={mapWeatherIcon(day.icon)}></i>
            <span>{Math.round(day.temperatureHigh) + "°"}</span>
            <span>{Math.round(day.temperatureLow) + "°"}</span>
          </div>
        );
      })}
    </div>
  );
}

export default WeeklyWeather;
