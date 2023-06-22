import React, { useState, useEffect } from 'react';
import './counterview.css';

export default function CounterView() {
  const [txtmin, setTxtmin] = useState('');
  const [txtsec, setTxtsec] = useState('');
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(updateCounter, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPaused]);

  const handleTxtminChange = (event) => {
    setTxtmin(event.target.value);
  };

  const handleTxtsecChange = (event) => {
    setTxtsec(event.target.value);
  };

  const handleStartClick = () => {
    let min = parseInt(txtmin);
    let sec = parseInt(txtsec);

    if (min >= 0 && sec >= 0) {
      setMinute(min);
      setSecond(sec);
      setIsPaused(false);
    } else {
      alert('Por favor ingrese valores correctos');
    }
  };

  const togglePausePlayCounter = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const handleResetClick = () => {
    setTxtmin('');
    setTxtsec('');
    setMinute(0);
    setSecond(0);
    setIsPaused(true);
  };

  const updateCounter = () => {
    if (minute === 0 && second === 0) {
      setIsPaused(true);
      return;
    }

    if (second === 0) {
      setMinute((prevMinute) => prevMinute - 1);
      setSecond(59);
    } else {
      setSecond((prevSecond) => prevSecond - 1);
    }
  };

  return (
    <div className="content">
      <div className="titleTemp">
        <h1>Temporizador</h1>
        <p>Controla el tiempo de paseo de tu amig@</p>
      </div>
      <div className="configuration">
        <div id="configuration-values">
          <p>Minuto inicial</p>
          <input type="text" value={txtmin} onChange={handleTxtminChange} />
        </div>
        <div id="configuration-values">
          <p>Segundo inicial</p>
          <input type="text" value={txtsec} onChange={handleTxtsecChange} />
        </div>
      </div>

      <div className="timer">
        <div className="display">
          <div className="time">
            <p id="minute">{minute.toString().padStart(2, '0')}</p>
            <p id="separated">:</p>
            <p id="second">{second.toString().padStart(2, '0')}</p>
          </div>
        </div>

        <div className="controls">
          <i id="btn-start" className="fa-solid fa-power-off" onClick={handleStartClick}></i>
          <i
            id="btn-pause-play"
            className={`fa-solid ${isPaused ? 'fa-play' : 'fa-pause'}`}
            onClick={togglePausePlayCounter}
          ></i>
          <i id="btn-reset" className="fa-solid fa-arrow-rotate-left" onClick={handleResetClick}></i>
        </div>
      </div>
    </div>
  );
}
