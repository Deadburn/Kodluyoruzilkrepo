import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios'

const WeatherContext = createContext();


export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState()
    const [city, setCity] = useState('istanbul')
    const [icon, setIcon] = useState('')

    const values = {weather, setWeather, city, setCity, icon}

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=635bb22fbe16c29fdfcd56c12f6731e7`)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setWeather(data.weather[0].main)
                setIcon(data.weather[0].icon)
            })
    },[city])

    // api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}


    return <WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)



