import React from 'react';

const Form = ({ handleKeyPress, input, setInput, handleClick, date }) => {
  return (
    <div>
      <a className='title' href='https://gonzalezmassini.github.io/'>
        <h1>Search Weather At Any location</h1>
      </a>
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
      <button type='submit' className='btn' onClick={() => handleClick()}>
        Search Weather
      </button>
      <h1 className='date'>{date}</h1>
    </div>
  );
};

export default Form;
