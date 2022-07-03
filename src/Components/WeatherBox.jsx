import React, { useEffect, useState } from 'react';
import axios from 'axios';




const WeatherBox = () => {

    const [weather, setWeather ] = useState({})

    useEffect(() =>{
        
        const success = pos => {
            const crd = pos.coords
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=664adefe760417ec3dbdaadc80f173b2`)
                .then(res => setWeather(res.data))
        }
    
        navigator.geolocation.getCurrentPosition(success);

    },[] )

    console.log(weather)

    return (

        <div className='container'>
            <h1>Weather App</h1>
            <h3>{weather.name}, {weather.sys?.country}</h3>
            <div className="details">
                <p>{weather.weather?.[0].description}</p>
                <ul style={{display:"inline"}}> {/*this might be bads*/}
                    <li><i className="fa-solid fa-fan"></i> Wind speed: {weather.wind?.speed}</li>
                    <li><i className="fa-solid fa-cloud"></i> Clouds: {weather.clouds?.all}%</li>
                    <li><i class="fa-solid fa-temperature-half"></i> Pressure: {weather.main?.pressure}</li>
                </ul>
            </div>
            <h2>Temp here lol</h2>
        </div>
    );
};

export default WeatherBox;