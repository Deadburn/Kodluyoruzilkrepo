import React, { useState } from "react";

import { useWeather } from "../context/WeatherContext";



function Weather() {
    const { weather, city, icon } = useWeather();
    



{/* {sehirler.map((sehir, index) => {
            <Dropdown.Item href={`#/action-${index + 1}`}>{sehir}</Dropdown.Item>
        })} */}

  return (
    <div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <p>{weather}</p>
    </div>
  );
}

export default Weather;


