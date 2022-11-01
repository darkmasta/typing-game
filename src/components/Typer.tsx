import React, { useEffect, useState, useRef } from "react";
import Quote from "./Quote";
import StartButton from "./StartButton";
import Timer from "./Timer";
import styled from "styled-components";
import { newCustomEventEmitter } from 'react-custom-events'
import useEventListener from '@use-it/event-listener'

const ESCAPE_KEYS = ['27', 'Escape'];


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  paddding: 0.25em 1em;
  &: hover {
    background: palevioletred;
    color: white;
  }
`;

const Typer: React.FC = () => {
  const [isStarted, setIsStarted] = useState<boolean>(true);
  const [timer, setTimer] = useState<boolean>(false);
  const [quote, setQuote] = useState<string>(
    '"The best way to predict the future is to create it."'
  );
  const [auther, setAuther] = useState<string>("Abraham Lincoln");
  const [userText, setUserText] = useState<string[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const finishedButtonRef = useRef<HTMLButtonElement>(null);

  const emitter = newCustomEventEmitter()

  const handler = () => {
      console.log('event fired')
      emitter.emit('gameStarted', {isStarted: true})
  }

  const handleKeyPress = (e: string): void => {
    setUserText(e.split(""));
  };

  const handleKeyEvent = (e: KeyboardEvent): void => {
    if (ESCAPE_KEYS.includes(e.key)) {
        console.log('Escape key pressed')
    }

    if (isStarted) {
        inputRef.current?.focus();
    }
  }

  useEventListener('keydown', handleKeyEvent)

  // typescript onChange event handler react
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {};

  const fetchNewQuote = (): void => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setUserText([]);
        setAuther(data.author);
        setIsStarted(false); // to restart the timer
        setIsStarted(true);
        inputRef.current?.focus();
      });
  };

  useEffect(() => {
    if (userText.length > 0) {
        setIsStarted(true);
        console.log("IS_STARTED", isStarted)
    }

    if (userText.length >= quote.length) {
      setIsStarted(false);
      setTimer(false);
      finishedButtonRef.current?.focus();
      console.log("game ended");
    }
  }, [userText]);

  return (
    <div className="container">
      <Timer isStarted={isStarted} setIsStarted={setIsStarted}  />
      <div className="text-quote">
        <Quote quote={quote} userText={userText} />
        <div>
          ---- <i>{auther}</i>
        </div>
        {/* {inputRef.current?.focus() && (
          <div className="start-typing">Start typing...</div>
        )} */}
        <div className="start-typing">Start typing...</div>
      </div>
      <div className="text">
        <textarea
          id="input-text"
          autoFocus
          ref={inputRef}
          name="input-text"
          value={userText.join("")}
          onChange={(e) => handleKeyPress(e.currentTarget.value)}
        />
      </div>
      <div className="row">
        <Button onClick={fetchNewQuote}>New Quote</Button>

          <button ref={emitter} onClick={handler}>
              Fire Event
          </button>

          {!isStarted && (
              <Button
            onClick={() => {
              setIsStarted(false);
              setTimer(false)
              fetchNewQuote();
            }}
            ref={finishedButtonRef}
          >
            Finished
          </Button>
        )}

      </div>
    </div>
  );
};

export default Typer;
