import { createContext, useState, useEffect, useContext } from "react";


const WeatherContext = createContext();


export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState()
    const [city, setCity] = useState('istanbul')
    const [icon, setIcon] = useState('')
    const [coord, setCoord] = useState({lon: '41.0351', lat: '28.9833'})



    const values = {weather, setWeather, city, setCity, icon, setIcon, coord, setCoord}

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=635bb22fbe16c29fdfcd56c12f6731e7`)
            .then((res) => res.json())
            .then(data => {
                setCoord(data.coord)
                setWeather(data.weather[0].main)
                setIcon(data.weather[0].icon)
            })
    },[city])

    


    return <WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)



