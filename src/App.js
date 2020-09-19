import React from 'react';
import './App.css';

const App = () => {
  return (
    <main>
      <form>
        <label htmlFor="countdown">Countdown:</label>
        <input type="text" name="time" placeholder="(Min)" />
        <button type="button">START</button>
      </form>
      <section>
        <p>More than halfway there!</p>
        <article>
          <div className="counter">
            <span>5</span>
            <span>1</span>
            <span>:</span>
            <span>2</span>
            <span>3</span>
          </div>
          <button>Play/Pause</button>
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
