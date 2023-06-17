import React from 'react';
import "./counterview.css";
export default function CounterView(){
      return (
        <div className='content'>
            <div className="titleTemp">
                <h1>Temporizador</h1>
                <p>Controla el tiempo de paseo de tu amig@</p>
            </div>
            <div className="configuration">
                <div id="configuration-values">
                    <p>Minuto inicial</p>
                    <input type="text" id="initial-minute" />
                </div>
                <div id="configuration-values">
                    <p>Segundo inicial</p>
                    <input type="text" id="initial-second" />
                </div>
            </div>
        
            <div className="timer">
                <div className="display">
                    <div className="time">
                    <p id="minute">00</p>
                    <p id="separated">:</p>
                    <p id="second">00</p>
                    </div>
                </div>
        
                <div className="controls">
                    <i id="btn-start" className="fa-solid fa-power-off"></i>
                    <i id="btn-pause-play" className="fa-solid fa-pause"></i>
                    <i id="btn-reset" className="fa-solid fa-arrow-rotate-left"></i>
                </div>
            </div>
        </div>
      );
    };    
