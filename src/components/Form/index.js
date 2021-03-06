import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ onChange }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    let time = '';

    if (e) {
      e.preventDefault();
    }

    if (/^([0-9])?$/.test(value)) {
      time = `0${value}:00`;
    }else if (/^([0-5][0-9])?$/.test(value)) {
      time = `${value}:00`;
    }else if (/^([0-5][0-9])(:[0-5])?$/.test(value)){
      time = `${value}0`;
    }else if (/^([0-5][0-9])(:[0-5][0-9])?$/.test(value)){
      time = value;
    }

    if (time !== '') {
      onChange(time);
      setValue('');
      setError(null);
    } else {
      setError('time should be in MM:SS format.')
    }
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <fieldset>
        <label htmlFor="countdown">Countdown:</label>
        <input
          type="text"
          name="time"
          placeholder="(Min)"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>START</button>
      </fieldset>
      {error ? (<p>{error}</p>) : null}
    </form>
  );
}

Form.propTypes = {
  onChange: PropTypes.func
};

export default Form;
