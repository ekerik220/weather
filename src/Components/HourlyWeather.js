import React from 'react';

function HourlyWeather() {
    return (
        <div id="hourly-weather">
            <div className="hour">
                <span>16:00</span>
                <span>32°</span>
                <div style={{background:"red", width:"50px", height: "50px"}}></div>
            </div>
            <div className="hour">
                <span>17:00</span>
                <span>32°</span>
                <div style={{background:"red", width:"50px", height: "50px"}}></div>
            </div>
            <div className="hour">
                <span>18:00</span>
                <span>32°</span>
                <div style={{background:"red", width:"50px", height: "50px"}}></div>
            </div>
            <div className="hour">
                <span>19:00</span>
                <span>32°</span>
                <div style={{background:"red", width:"50px", height: "50px"}}></div>
            </div>
            <div className="hour">
                <span>20:00</span>
                <span>32°</span>
                <div style={{background:"red", width:"50px", height: "50px"}}></div>
            </div>
        </div>
    );
}

export default HourlyWeather;