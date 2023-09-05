import React, { useEffect, useState } from "react";

export function useTimer(
  startFlag: boolean,
  initialMinutes: number,
  initialSeconds: number
) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (startFlag) {
      const countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [startFlag, minutes, seconds]);

  return { minutes, seconds };
}
