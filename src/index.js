import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

const txtmin = document.getElementById("initial-minute");
const txtsec = document.getElementById("initial-second");
const btnStart = document.getElementById("btn-start");
const btnPausePlay = document.getElementById("btn-pause-play");
const btnReset = document.getElementById("btn-reset");

let intervalId;
let isPaused = false;

btnStart.addEventListener('click', initCounter);
btnPausePlay.addEventListener('click', togglePausePlayCounter);
btnReset.addEventListener('click', resetCounter);

function initCounter() {
    let min = parseInt(txtmin.value);
    let sec = parseInt(txtsec.value);
    
    if (min >= 0 && sec >= 0) {
        let separateDiv = document.getElementById("separated");
        let minuteDiv = document.getElementById("minute");
        let secondDiv = document.getElementById("second");
        separateDiv.style.display = "block";
        minuteDiv.innerHTML = min;
        secondDiv.innerHTML = sec;

        intervalId = setInterval(updateCounter, 1000);
    } else {
        alert("Por favor ingrese valores correctos");
    }
}

function updateCounter() {
    if (!isPaused) {
        let minuteDiv = document.getElementById("minute");
        let secondDiv = document.getElementById("second");
        let minute = parseInt(minuteDiv.innerHTML);
        let second = parseInt(secondDiv.innerHTML);

        if (minute === 0 && second === 0) {
        clearInterval(intervalId);
        return;
        }

        if (second === 0) {
        minute--;
        second = 59;
        } else {
        second--;
        }

        minuteDiv.innerHTML = minute;
        secondDiv.innerHTML = second;
    }
}

function togglePausePlayCounter() {
    isPaused = !isPaused;
    btnPausePlay.classList.toggle('fa-pause')
    btnPausePlay.classList.remove('fa-play');

    if(isPaused){
        btnPausePlay.classList.toggle('fa-play');
        
    }

}

function resetCounter(){
    txtmin.value='';
    txtsec.value='';
    let minuteDiv = document.getElementById("minute");
    let secondDiv = document.getElementById("second");
    minuteDiv.innerHTML = '00'
    secondDiv.innerHTML = '00'
}