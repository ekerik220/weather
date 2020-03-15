import React from 'react';

function CurrentWeather() {
    return (
        <div>
            <div id="day-banner">
                <span>Tuesday, 15</span>
            </div>
            <div id="current-weather">
                <div id="current-temperature">
                    <span>Tsuru</span>
                    <span>+32°</span>
                </div>
                <div id="current-icon">
                    <div style={{background:"red", width:"50px", height: "50px"}}></div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
