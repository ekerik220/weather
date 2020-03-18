import React from "react";

function SecondaryWeather(props) {
  return (
    <div id="secondary-weather">
      <div className="secondary-category">
        <span>Humidity</span>
        <span>{Math.round(props.currentWeather.humidity * 100) + "%"}</span>
      </div>
      <div className="secondary-category">
        <span>Wind</span>
        <span>{Math.round(props.currentWeather.windSpeed) + " m/s"}</span>
      </div>
      <div className="secondary-category">
        <span>Air Pressure</span>
        <span>{(props.currentWeather.pressure*10)/10 + " mm"}</span> {/* *10/10 rounds to 1 decimal */}
      </div>
      <div className="secondary-category">
        <span>UV</span>
        <span>{props.currentWeather.uvIndex}</span>
      </div>
    </div>
  );
}

export default SecondaryWeather;
