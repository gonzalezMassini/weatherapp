import React, { useState } from 'react';
import Form from './Form';
import date from '../functions/date';
import Weather from './Weather';

const WeatherApp = () => {
  const [data, setData] = useState({});
  const [input, setInput] = useState('');
  const [isCelsius, setIsCelsius] = useState(false);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=de04cbd27ff60fc38b11760da153f2bb`;
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setInput('');
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getData();
    }
  };
  const handleClick = () => {
    getData();
  };
  const handleF = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className='weather'>
      <Form
        handleKeyPress={handleKeyPress}
        input={input}
        setInput={setInput}
        handleClick={handleClick}
        date={date}
      />
      <Weather data={data} isCelsius={isCelsius} handleF={handleF} />
    </div>
  );
};

export default WeatherApp;
