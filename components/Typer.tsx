import React, { useEffect, useState, useRef } from "react";
import Quote from "./Quote";
import Timer from "./Timer";
import { newCustomEventEmitter } from "react-custom-events";
import useEventListener from "@use-it/event-listener";
import { useTyperContext } from "./context/typer_context";
import ProgressTimer from "./ProgressTimer";

const ESCAPE_KEYS = ["27", "Escape", "Enter"];

const Button: React.FC<any> = ({ text, onClickCb }) => {
  return (
    <button
      className="bg-transparent rounded-sm border-2 border-solid border-[paleviletred]"
      onClick={onClickCb}
    >
      {text}
    </button>
  );
};

const Typer: React.FC = () => {
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
    isStarted,
    setIsStarted,
    timePast,
  } = useTyperContext({});

  const [timer, setTimer] = useState<boolean>(false);
  const [quote, setQuote] = useState<string>(
    '"The best way to predict the future is to create it."'
  );
  const [author, setAuthor] = useState<string>("Abraham Lincoln");
  const [userText, setUserText] = useState<string[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const finishedButtonRef = useRef<HTMLButtonElement>(null);

  const emitter = newCustomEventEmitter();

  const handler = () => {
    console.log("event fired");
    emitter.emit("gameStarted", { isStarted: true });
  };

  const handleKeyPress = (e: string): void => {
    setUserText(e.split(""));
  };

  const handleKeyEvent = (e: KeyboardEvent): void => {
    if (ESCAPE_KEYS.includes(e.key)) {
      console.log("Escape key pressed");
      return;
    }

    if (!isStarted) {
      console.log("focus");
      setIsStarted(true);
    } else {
      inputRef.current?.focus();
    }
  };

  useEventListener("keydown", handleKeyEvent);

  // typescript onChange event handler react
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {};

  const fetchNewQuote = (): void => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setUserText([]);
        setAuthor(data.author);
        setIsStarted(false); // to restart the timer
        // setIsStarted(true);
        inputRef.current?.focus();
      });
  };

  const [wpm, setWpm] = useState<number>(0);

  useEffect(() => {
    if (userText.length > 0) {
      setIsStarted(true);
      //console.log("IS_STARTED", isStarted);
    }

    // callculate words per minute
    let allTypedEntries = userText.length / 5;

    console.log(allTypedEntries);
    console.log(timePast);

    if (isNaN(wpm)) {
      setWpm(0);
    }
    if (timePast > 0) {
      setWpm(Math.round(allTypedEntries / (timePast / 60)));
    }

    if (userText.length >= quote.length) {
      setIsStarted(false);
      setTimer(false);
      finishedButtonRef.current?.focus();
      //console.log("game ended");
    }
  }, [userText, timePast]);

  return (
    <div className="container">
      <ProgressTimer />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">{wpm}</h1>
      </div>
      <Timer key={123} isStartedData={isStarted} />
      <div className="text-quote">
        <Quote quote={quote} userText={userText} />
        <div>
          ---- <i>{author}</i>
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
        <button
          onClick={fetchNewQuote}
          className="bg-transparent rounded-sm border-2 border-solid border-pink-500 bg-pink-500 text-white"
        >
          New Quote
        </button>

        {!isStarted && !timer && (
          <button
            onClick={() => {
              setIsStarted(false);
              setTimer(false);
              fetchNewQuote();
            }}
            className="bg-transparent rounded-sm border-2 border-solid border-[pink] border-pink-500 bg-pink-500  text-white ml-4"
            ref={finishedButtonRef}
          >
            Finished
          </button>
        )}
      </div>
    </div>
  );
};

export default Typer;
