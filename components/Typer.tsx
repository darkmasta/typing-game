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
    isGameStarted,
    setGameStarted,
    timePast,
  } = useTyperContext({});

  const [isTimerSet, setTimer] = useState<boolean>(false);
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
    emitter.emit("gameStarted", { isGameStarted: true });
  };

  const handleKeyPress = (e: string): void => {
    setUserText(e.split(""));
  };

  const handleKeyEvent = (e: KeyboardEvent): void => {
    if (ESCAPE_KEYS.includes(e.key)) {
      console.log("Escape key pressed");
      return;
    }

    if (!isGameStarted) {
      console.log("focus");
      setGameStarted(true);
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
        setGameStarted(false); // to restart the timer
        // setGameStarted(true);
        inputRef.current?.focus();
      });
  };

  const [wpm, setWpm] = useState<number>(0);

  useEffect(() => {
    if (userText.length > 0) {
      setGameStarted(true);
      //console.log("IS_STARTED", isGameStarted);
    }

    // callculate words per minute

    if (userText.length >= quote.length) {
      setGameStarted(false);
      setTimer(false);
      finishedButtonRef.current?.focus();
      setTotalTypedCharacters(Math.round(userText.length / 5));
      //console.log("game ended");
    }
  }, [userText]);

  const [totalTypedCharacters, setTotalTypedCharacters] = useState<number>(0);

  // useEffect(() => {
  //   let allTypedEntries = totalTypedCharacters + userText.length / 5;
  //
  //   if (isNaN(wpm)) {
  //     setWpm(0);
  //   }
  //
  //   console.log(allTypedEntries);
  //   console.log(timePast);
  //
  //   if (timePast > 0) {
  //     setWpm(Math.round(allTypedEntries / (timePast / 60)));
  //   }
  // }, [timePast]);

  useEffect(() => {
    // Calculate WPM only if the game has started and there are typed characters.
    if (isGameStarted && userText.length > 0) {
      const elapsedTimeInMinutes = (30 - seconds) / 60; // Assuming 30 seconds is the total time
      const wordsTyped = userText.join("").length / 5;
      setWpm(elapsedTimeInMinutes > 0 ? Math.round(wordsTyped / elapsedTimeInMinutes) : 0);
    }
  }, [userText, seconds, isGameStarted]);


  return (
    <div className="container mx-auto">
      <ProgressTimer />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">{wpm}</h1>
      </div>
      <Timer key={123} isStartedData={isGameStarted} />
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

        {!isGameStarted && !isTimerSet && (
          <button
            onClick={() => {
              setGameStarted(false);
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
