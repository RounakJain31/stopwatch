import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [startStatus, setStartStatus] = useState(false);

  useEffect(() => {
    let interval;
    if (startStatus) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startStatus]);

  const handleStart = () => {
    setStartStatus(!startStatus);
  };

  const handleReset = () => {
    setTime(0);
    setStartStatus(!startStatus);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(1, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p className="timer">Time: {formatTime(time)}</p>
      <button onClick={handleStart}>{!startStatus ? "Start" : "Stop"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
