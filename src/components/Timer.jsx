import React, { useState, useEffect } from 'react';

const Timer = ({isExecuting}) => {
  const [runningTime, setRunningTime] = useState(0);
  const [startTime,setStartTime] = useState(0);


  useEffect(() => {
    let interval = null;
    if(startTime===0)
    {
      setStartTime(Date.now())
    }

    if (isExecuting) {
      interval = setInterval(() => {
        setRunningTime(Date.now() - startTime);
        
      }, 10);
    } else{
      setStartTime(0)
      
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isExecuting, runningTime]);

  let centiseconds = ("0" + (Math.floor(runningTime / 10) % 100)).slice(-2);
  let seconds = ("0" + (Math.floor(runningTime / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(runningTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(runningTime / 3600000)).slice(-2);
  return (
    <div>
      <div>
      {hours} : {minutes} : {seconds} : {centiseconds}
      </div>
     
    </div>
  );
};

export default Timer;