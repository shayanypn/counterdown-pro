import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ time }) => {

  time = (typeof time === 'number' && time >= 0) ? time : 0;
  const minutes = parseInt(time / 60, 10);
  const seconds = parseInt(time % 60, 10);

  return (
    <div className="counter">
      <span>{minutes < 10 ? '0' + minutes : minutes}</span>
      <span>:</span>
      <span>{seconds < 10 ? '0' + seconds : seconds}</span>
    </div>
  );
}

Timer.propTypes = {
  time: PropTypes.number
};

export default Timer;
