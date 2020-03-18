import React from "react";

function HourlyWeather(props) {
  const hours = props.hourlyWeather.data.slice(1, 6); // The 5 hours after current hour
  return (
    <div id="hourly-weather">
      {hours.map((hour, index) => {
        return (
          <div className="hour" key={index}>
            <span>{new Date(hour.time * 1000).getHours() + ":00"}</span> {/* hour.time is in UNIX units at first */}
            <span>{Math.round(hour.temperature) + "°"}</span>
            <div
              style={{ background: "red", width: "50px", height: "50px" }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default HourlyWeather;
