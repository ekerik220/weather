import React from "react";

function SecondaryWeather(props) {
  return (
    <div id="secondary-weather">
      <div className="secondary-category">
        <span className="secondary-category-label">Humidity</span>
        <span>{Math.round(props.currentWeather.humidity * 100) + "%"}</span>
      </div>
      <div className="secondary-category">
        <span className="secondary-category-label">Wind</span>
        <span>{Math.round(props.currentWeather.windSpeed) + " m/s"}</span>
      </div>
      <div className="secondary-category">
        <span className="secondary-category-label">Air Pressure</span>
        <span>{(props.currentWeather.pressure*10)/10 + " mm"}</span> {/* *10/10 rounds to 1 decimal */}
      </div>
      <div className="secondary-category">
        <span className="secondary-category-label">UV</span>
        <span>{props.currentWeather.uvIndex}</span>
      </div>
    </div>
  );
}

export default SecondaryWeather;
