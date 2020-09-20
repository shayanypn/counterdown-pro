import React from 'react';
import PropTypes from 'prop-types';

const SPEEDS = [
  {
    second: 1000,
    name: '1X'
  },{
    second: 750,
    name: '1.5X'
  },{
    second: 500,
    name: '2X'
  }
];

const Speed = ({ onChange, active }) => {
  return (
    <>
      {SPEEDS.map(speed => (<button
        key={speed.second}
        className={active === speed.second ? 'active' : ''}
        onClick={() => onChange(speed.second)}
      >{speed.name}</button>))}
    </>
  );
}

Speed.propTypes = {
  active: PropTypes.number,
  onChange: PropTypes.func
};

export default Speed;
