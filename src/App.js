import React, { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./Components/CurrentWeather";
import HourlyWeather from "./Components/HourlyWeather";
import SecondaryWeather from "./Components/SecondaryWeather";
import WeeklyWeather from "./Components/WeeklyWeather";

function App() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [weeklyWeather, setWeeklyWeather] = useState();
  const [hourlyWeather, setHourlyWeather] = useState();

  // Get coordinates when component mounts, and then call the getCity and getWeather functions.
  useEffect(function getCoords() {
    function success(loc) {
      getCity(loc.coords);
      getWeather(loc.coords);
    }

    function error(error) {
      switch (error.code) {
        case 1:
          console.log("Permission denied");
          break;
        case 2:
          console.log("Position unavailable");
          break;
        case 3:
          console.log("Timeout");
          break;
        default:
          console.log("Unknown error");
          break;
      }
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 1000,
      maximumAge: 0
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, []);

  // Get city name from locationiq API (free license, 2500 calls per day limit).
  function getCity(coords) {
    const request = new XMLHttpRequest();
    const method = "GET";
    const url =
      "https://us1.locationiq.com/v1/reverse.php?key=23934d134759e2&lat=" +
      coords.latitude +
      "&lon=" +
      coords.longitude +
      "&format=json&zoom=10&normalizecity=1";
    const async = true;

    request.open(method, url, async);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        setCity(data.address.county);
      }
    };
    request.send();
  }

  // Get weather information from Dark Sky API (free license, 1000 calls per day limit).
  function getWeather(coords) {
    const request = new XMLHttpRequest();
    const method = "GET";
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/847c0264665bdfcc55531c19f1e68eb4/" +
      coords.latitude +
      "," +
      coords.longitude +
      "?units=auto";
    const async = true;

    request.open(method, url, async);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        setCurrentWeather(data.currently);
        setHourlyWeather(data.hourly);
        setWeeklyWeather(data.daily);
      }
    };
    request.send();
  }

  // Render the application only if both API requests have returned something already.
  if (city && currentWeather) {
    return (
      <div className="App">
        <CurrentWeather currentWeather={currentWeather} city={city} />
        <HourlyWeather hourlyWeather={hourlyWeather} />
        <SecondaryWeather currentWeather={currentWeather} />
        <WeeklyWeather weeklyWeather={weeklyWeather} />
      </div>
    );
  }

  // If API calls haven't returned something yet, render a blank div.
  return <div></div>;
}

export default App;
