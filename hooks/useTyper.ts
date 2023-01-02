import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import timer from "../components/Timer";

export default function useTyper({}) {
  const [isStarted, setIsStarted] = useState<Boolean>(false);

  const expiryTime: Date = new Date();
  expiryTime.setSeconds(expiryTime.getSeconds() + 30); // 30 sec timer

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: expiryTime,
    onExpire: () => setIsStarted(false),
  });

  const [timePast, setTimePast] = useState<number>(seconds);

  useEffect(() => {
    if (timePast <= 0) {
      setTimePast(0);
      setIsStarted(false);
    }
    isStarted ? setTimePast(30 - seconds) : setTimePast(0);
    // console.log(timePast);
  }, [seconds]);

  return {
    isStarted,
    setIsStarted,
    timePast,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  };
}
