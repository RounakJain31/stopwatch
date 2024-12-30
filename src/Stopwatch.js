import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const [intervalId, setIntervalId] = useState(null);


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };


  const toggleTimer = () => {
    if (isRunning) {

      clearInterval(intervalId);
      setIsRunning(false);
    } else {

      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };


  const resetTimer = () => {
    clearInterval(intervalId);
    setSeconds(0);
    setIsRunning(false);
  };


  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div className="time-display">
        <span>Time</span>
        <span>{formatTime(seconds)}</span>
      </div>
      <div className="buttons">
        <button onClick={toggleTimer}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
