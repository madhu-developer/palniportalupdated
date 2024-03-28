import React, { useState, useEffect } from 'react';

export const Clock = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [status, setStatus] = useState('Clock Out');
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  const handleClockInOut = () => {
    const now = new Date();

    if (status === 'Clock Out') {
      setStatus('Clock In');
      setStartTime(now);
    } else {
      setStatus('Clock Out');
      setEndTime(now);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      if (startTime && endTime) {
        const elapsedMilliseconds = endTime - startTime;
        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
        setElapsedTime(elapsedSeconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return (
    <div>
      <h1>{time}</h1>
      <p>{status === 'Clock Out' ? 'Clock In to start working' : `Elapsed Time: ${elapsedTime} seconds`}</p>
      <button onClick={handleClockInOut}>{status}</button>
    </div>
  );
};

