import React, { useState } from "react";


function Stopwatch(){
  
    const [timerOn,setTimerOn] = useState(false)
    const [timerStart,setTimerStart] = useState(false)
    const [timerTime,setTimerTime] = useState(false)
    const [timer,setTimer] = useState(0)

  const startTimer = () => {
   
      setTimerOn(true);
      setTimerStart(Date.now() - timerTime);
    
    setTimer(setInterval(() => setTimerTime(Date.now() - timerStart) , 10));
  };

  const stopTimer = () => {
    setTimerOn(false)
    clearInterval(timer);
  };


    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div>
        <div>Stopwatch</div>
        <div>
          {hours} : {minutes} : {seconds} : {centiseconds}
        </div>
        {timerOn === false && timerTime === 0 && (
          <button onClick={startTimer}>Start</button>
        )}
        {timerOn === true && (
          <button onClick={stopTimer}>Stop</button>
        )}
        {timerOn === false && timerTime > 0 && (
          <button onClick={startTimer}>Resume</button>
        )}
      </div>
    );
  
}
export default Stopwatch;
