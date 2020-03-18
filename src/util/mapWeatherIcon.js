function mapWeatherIcon(weather_icon_string) {
    switch(weather_icon_string) {
        case "clear-day":
            return "wi wi-day-sunny";
        case "clear-night":
            return "wi wi-night-clear";
        case "rain":
            return "wi wi-rain";
        case "snow":
            return "wi wi-snow";
        case "sleet":
            return "wi wi-sleet";
        case "wind":
            return "wi wi-strong-wind";
        case "fog":
            return "wi wi-fog";
        case "cloudy":
            return "wi wi-cloudy";
        case "partly-cloudy-day":
            return "wi wi-day-cloudy";
        case "partly-cloudy-night":
            return "wi wi-night-alt-cloudy";
        default:
            return "wi wi-cloudy";
    }
}

export default mapWeatherIcon;