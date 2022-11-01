import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useTimer } from 'react-timer-hook';
import { useCustomEventListener } from 'react-custom-events'



const TimerContainer = styled.div`
  margin-bottom: 70px;
  max-width: 1200px;
`;

const time = new Date();
time.setSeconds(time.getSeconds() + 30); // 30 sec timer

const Timer: React.FC<any> = ({expiryTimestamp = time, isStarted, setIsStarted }) => {


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
    } = useTimer({ expiryTimestamp, onExpire: () => setIsStarted(false) });

    const firstRender = useRef(true);

    const listener = useCustomEventListener('gameStarted', (data) => {


        console.log("EVENT DATA",data)
    })

    useEffect(() => {
        if (firstRender.current) {
            console.log('first render')
            pause()
            firstRender.current = false;
            return;
        }

        console.log("EFECT", isStarted)

        if(isStarted) {
            resume()
        }


    }, [isStarted]);



    const renderTimer = (): JSX.Element => {
        return (
            <div style={{textAlign: 'center'}} ref={listener}>
                <h1>react-timer-hook </h1>
                <p>Timer Demo</p>
                <div style={{fontSize: '100px'}}>
                    <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p>{isRunning ? 'Running' : 'Paused' }</p>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={() => {
                    // Restarts to 5 minutes timer
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 300);
                    restart(time)
                }}>Restart</button>

            </div>
        );
    };

    return <TimerContainer>{renderTimer()}</TimerContainer>;
};

export default Timer;
