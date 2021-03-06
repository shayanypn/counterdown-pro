import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import Speed from './components/Speed';
import PauseIcon from './assets/pause.svg';
import PlayIcon from './assets/play.svg';

const Message = ({ seconds, middle }) => (
  <React.Fragment>
    {(seconds <= middle && (seconds > 0 && middle > 0)) ? <p>More than halfway there!</p> : null}
    {(seconds === 0 && middle > 0) ? <p>Time’s up!</p> : null}
  </React.Fragment>
);

const App = () => {
  const [model, setModel] = useState({
    seconds: 0,
    middle: 0
  });
  const [pause, setPause] = useState(false);
  const [speed, setSpeed] = useState(1000);

  const handleStart = (value) => {
    const [minute, second] = value.split(':').map(i => parseInt(i, 10));
    const total_seconds = minute * 60 + second;
    setModel({
      seconds: total_seconds,
      middle: parseInt(total_seconds/2, 10)
    });
    setPause(false);
  }

  const timerClassname = () => {
    const classes = [];

    if (model.seconds <= 10 && model.seconds !== 0 && model.middle > 0) {
      classes.push('blinking')
    }

    if (model.seconds <= 20 && model.seconds !== 0 && model.middle > 0) {
      classes.push('red')      
    }

    return classes.join(' ');
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (model.seconds > 0 && !pause)
        setModel(prevStat => ({...prevStat, seconds: (prevStat.seconds-1)}))
    }, speed);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [model, model.seconds, pause, speed]);

  return (
    <main>
      <Form onChange={handleStart} />
      <section>
        <Message 
          seconds={model.seconds}
          middle={model.middle}
        />
        <article>
          <Timer
            className={timerClassname()} 
            seconds={model.seconds}
          />
          <button className="btn-pause" onClick={() => setPause(prevStat => !prevStat)}>
            <img src={pause ? PlayIcon : PauseIcon} alt="pause/resume" />
          </button>
        </article>
      </section>
      <footer>
        <Speed 
          active={speed}
          onChange={_speed => setSpeed(_speed)}
        />
      </footer>
    </main>
  );
}

export default App;
