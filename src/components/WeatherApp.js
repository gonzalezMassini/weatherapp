import React, { useState } from 'react';

import date from '../functions/date';

const WeatherApp = () => {
  const [data, setData] = useState({});
  const [input, setInput] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=de04cbd27ff60fc38b11760da153f2bb`
      )
        .then((res) => res.json())
        .then((result) => setData(result));
      setInput('');
    }
  };
  const handleF = () => {
    setIsCelsius(false);
  };
  const handleC = () => {
    setIsCelsius(true);
  };
  return (
    <div className='weather'>
      <h1>Search Weather At Any location</h1>
      <p>
        <input
          className='inputWeather'
          onKeyPress={handleKeyPress}
          type='text'
          placeholder='Enter City or Country...'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </p>
      <button className='btn' onClick={handleKeyPress}>
        search weather
      </button>
      <h1>{date}</h1>
      {typeof data.main != 'undefined' ? (
        <div>
          <div className='location-box'>
            <h1 className='location'>
              {data.name}, {data.sys.country}
            </h1>
          </div>
          <div className='weather-box'>
            {/* <h2 className='temp'>{Math.round(data.main.temp - 273.15)}°C</h2> */}
            {isCelsius ? (
              <h2 className='temp'>{Math.round(data.main.temp - 273.15)}°C</h2>
            ) : (
              <h2 className='temp'>
                {Math.round((data.main.temp - 273.15) * 1.8 + 32)}°F
              </h2>
            )}
            <div className='toggleTemp'>
              <button onClick={handleF} className='togglebtn'>
                F
              </button>
              <span> / </span>
              <button onClick={handleC} className='togglebtn'>
                C
              </button>
            </div>
            <h2 className='weather-info'>{data.weather[0].main}</h2>
            <h2 className='weather-info'>{data.weather[0].description}</h2>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt='logo'
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default WeatherApp;
