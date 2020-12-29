import React from 'react';

const Weather = ({ data, isCelsius, handleC, handleF }) => {
  return (
    <div className='weatherContainer'>
      {typeof data.main != 'undefined' ? (
        <div>
          <div className='location-box'>
            <h1 className='location'>
              {data.name}, {data.sys.country}
            </h1>
          </div>
          <div className='weather-box'>
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

export default Weather;
