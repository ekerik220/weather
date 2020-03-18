import React from 'react';

function DayBanner() {
  const date = new Date();
  const day_name = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ][date.getDay()];
  const day_number = date.getDate();

  return (
    <div id="day-banner">
      <span>{day_name + ", " + day_number}</span>
    </div>
  );
}

export default DayBanner;
