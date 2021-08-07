import React, { useState, useEffect } from "react";

import { useWeather } from "../context/WeatherContext";



function Weather() {
    const { weather, city, icon, coord, setCoord } = useWeather();
    const [daily, setDaily] = useState([])

    const {lat, lon} = coord


    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=d5b81d6550a1c141a666272a5c71400f`)
      .then((res) => res.json())
      .then((data) => setDaily(data.daily))
    },[city])

    // console.log(daily[0] ? daily[0] : null)

// 

  return (
    <div className="weather">
      {daily.map((day, index) => (
        <div className="weather-weekly" key={index}>
          <div >
            <h3 >{day.weather[0].main} - {day.temp.day}°(day)</h3>
            <img  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" />
            <h3 >{day.weather[0].description} - {day.temp.night}°(night)</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Weather;


