import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import './App.css';

const App = () => {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);

  const handleStart = (value) => {
    const [minute, second] = value.split(':').map(i => parseInt(i, 10));
    setTime(minute * 60 + second)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0 && !pause)
        setTime(prevStat => --prevStat)
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [time, pause]);

  return (
    <main>
      <Form onChange={handleStart} />
      <section>
        <p>More than halfway there!</p>
        <article>
          <Timer time={time} />
          <button onClick={() => setPause(prevStat => !prevStat)}>{pause ? 'play' : 'pause'}</button>
        </article>
      </section>
      <footer>
        <button className="active">1X</button>
        <button>1.5X</button>
        <button>2X</button>
      </footer>
    </main>
  );
}

export default App;
