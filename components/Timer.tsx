import React, { useEffect, useState, useRef } from "react";
import { useCustomEventListener } from "react-custom-events";
import { useTyperContext } from "./context/typer_context";

const time = new Date();
time.setSeconds(time.getSeconds() + 30); // 30 sec timer

interface TimerProps {
    expiryTimestamp?: Date;
    isStartedData?: boolean;
}

const Timer: React.FC<TimerProps> = ({ expiryTimestamp = time, isStartedData }) => {
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
    isGameStarted,
    setGameStarted,
  }: any = useTyperContext({
    setGameStarted: function (
      value: boolean | ((prevState: boolean) => boolean)
    ): void {
      throw new Error("Function not implemented.");
    },
    isGameStarted: false,
  });

  const firstRender = useRef(true);

  const listener = useCustomEventListener("gameStarted", (data) => {
    // console.log("EVENT DATA", data);
  });

  useEffect(() => {
    //console.log("isGameStarted", isGameStarted);
    if (firstRender.current) {
      firstRender.current = false;
      pause();
      return;
    }

    if (isGameStarted) {
      start();
      setGameStarted(true);
    }

    if (isGameStarted) {
      // start();
      resume();
    } else {
      // start();
      pause();
    }
  }, [isGameStarted]);

  /*
  useEffect(() => {
    if (firstRender.current) {
      console.log("first render");
      pause();
      firstRender.current = false;
      return;
    }

    if (!isStartedData) {
      console.log("asd false");
      start();
    }

    if (isStartedData) {
      console.log("asd true");
      console.log(isGameStarted);
      pause();
    }

    console.log("EFECT", isStartedData);
  }, [isGameStarted]);
  */

  const renderTimer = (): JSX.Element => {
    return (
      <div style={{ textAlign: "center" }} ref={listener}>
        {/*<h1>Is started: {isGameStarted}</h1>*/}
        <div style={{ fontSize: "50px" }}>
          {/*<span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:*/}
          <span>{seconds}</span>
        </div>
        <p>{isRunning ? "Running" : "Paused"}</p>
        <div className="space-x-4">
          {/*<button onClick={start}>Start</button>*/}
          {/*<button onClick={pause}>Pause</button>*/}
          {/*<button onClick={resume}>Resume</button>*/}
          <button
            onClick={() => {
              // Restarts to 5 minutes timer
              const time = new Date();
              time.setSeconds(time.getSeconds() + 30);
              restart(time);
            }}
          >
            Restart
          </button>
        </div>
      </div>
    );
  };

  return <div className="mb-[70px] max-w-[1200px]">{renderTimer()}</div>;
};

export default Timer;
