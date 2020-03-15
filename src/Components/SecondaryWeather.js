import React from 'react';

function SecondaryWeather() {
    return (
        <div id="secondary-weather">
            <div className="secondary-category">
                <span>Humidity</span>
                <span>80%</span>
            </div>
            <div className="secondary-category">
                <span>Wind</span>
                <span>5 m/s</span>
            </div>
            <div className="secondary-category">
                <span>Air Pressure</span>
                <span>756.0 mm</span>
            </div>
            <div className="secondary-category">
                <span>UV</span>
                <span>3</span>
            </div>
        </div>
    );
}

export default SecondaryWeather;