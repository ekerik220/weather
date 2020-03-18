import React from "react";

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
            <div
              style={{ background: "red", width: "25px", height: "25px" }}
            ></div>
            <span>{Math.round(day.temperatureHigh) + "°"}</span>
            <span>{Math.round(day.temperatureLow) + "°"}</span>
          </div>
        );
      })}
    </div>
  );
}

export default WeeklyWeather;
