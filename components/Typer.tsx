import React, { useEffect, useState, useRef } from "react";
import Quote from "./Quote";
import Timer from "./Timer";
import useEventListener from "@use-it/event-listener";
import { useTyperContext } from "../context/TyperContext";
import ProgressTimer from "./ui/ProgressTimer";
import {useGameContext} from "../context/GameContext";

const ESCAPE_KEYS = ["27", "Escape", "Enter"];

const Typer: React.FC = () => {
  const { seconds, isGameStarted, setGameStarted } = useTyperContext({});
  const { addLap, toggleModal } = useGameContext();

  const [isTimerSet, setTimer] = useState<boolean>(false);
  const [quote, setQuote] = useState<string>(
    'The best way to predict the future is to create it.'
  );
  const [author, setAuthor] = useState<string>("Abraham Lincoln");
  const [userText, setUserText] = useState<string[]>([]);
  const [wpm, setWpm] = useState<number>(0);
  const [totalTypedCharacters, setTotalTypedCharacters] = useState<number>(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const finishedButtonRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    if (userText.length > 0) {
      setGameStarted(true);
      setTotalTypedCharacters(Math.round(userText.length));
    }

    if (userText.length >= quote.length) {
      setGameStarted(false);
      setTimer(false);
      finishedButtonRef.current?.focus();
    }
  }, [userText]);



  useEffect(() => {
    const calculateWPM = () => {
      const wordsTypedWords = totalTypedCharacters / 5;
      const elapsedTimeInMinutes = (30 - seconds) / 60;
      return elapsedTimeInMinutes > 0 ? Math.round(wordsTypedWords / elapsedTimeInMinutes) : 0;
    };

    console.log(isGameStarted, totalTypedCharacters, seconds);

    if (isGameStarted && totalTypedCharacters > 0) {
      const finalWPM = calculateWPM();
      console.log(finalWPM);
      setWpm(finalWPM);
    }
  }, [isGameStarted, totalTypedCharacters, seconds]);

  // useEffect(() => {
  //   if (seconds == 0) {
  //       setGameStarted(false);
  //       setTimer(false);
  //       addLap({wpm, accuracy: 100})
  //       toggleModal();
  //   }
  // }, [seconds]);

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

  return (
    <div className="container mx-auto">
      <ProgressTimer />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">WPM: {wpm}</h1>
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

        <div>
          <button onClick={toggleModal} className="px-4 py-2 bg-blue-500 text-white rounded">
            Show Game Stats
          </button>
        </div>


      </div>
    </div>
  );
};

export default Typer;
