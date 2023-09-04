import React, { useEffect, useState } from "react";

export function useTimer(initialMinutes: number, initialSeconds: number) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        alert("Time OVER!");
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return { minutes, seconds };
}
