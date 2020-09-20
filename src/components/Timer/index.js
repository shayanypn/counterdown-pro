import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ className, seconds }) => {

  seconds = (typeof seconds === 'number' && seconds >= 0) ? seconds : 0;
  const _minutes = parseInt(seconds / 60, 10);
  const _seconds = parseInt(seconds % 60, 10);

  return (
    <div className={`counter ${className}`}>
      <span>{_minutes < 10 ? '0' + _minutes : _minutes}</span>
      <span>:</span>
      <span>{_seconds < 10 ? '0' + _seconds : _seconds}</span>
    </div>
  );
}

Timer.propTypes = {
  seconds: PropTypes.number,
  className: PropTypes.string
};

export default Timer;
