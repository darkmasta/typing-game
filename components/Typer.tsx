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

    if (isGameStarted && totalTypedCharacters > 0) {
      const finalWPM = calculateWPM();
      // console.log(finalWPM);
      setWpm(finalWPM);
    }
  }, [isGameStarted, totalTypedCharacters, seconds]);

  useEffect(() => {
    if (seconds == 0) {
        setGameStarted(false);
        setTimer(false);
        addLap({wpm, accuracy: 100, totalWords: Math.floor(totalTypedCharacters / 5)})
        setTotalTypedCharacters(0);

        toggleModal();
    }
  }, [seconds]);

  const handleKeyPress = (e: string): void => {
    const newText = e.split("");
    setUserText(newText);

    const charactersAdded = newText.length - userText.length;

    if (charactersAdded > 0) {
      setTotalTypedCharacters((prevTotal) => prevTotal + charactersAdded);
    }
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
        <h1 className="text-4xl font-bold text-white mb-16">WPM: {wpm}</h1>
      </div>
      {/*<Timer key={123} isStartedData={isGameStarted} />*/}
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

        {(
          <button
            onClick={() => {
              setGameStarted(false);
              setTimer(false);
              fetchNewQuote();
            }}
            className="rounded-sm border-2 border-solid border-[pink] border-pink-500 bg-pink-500  text-white ml-4 px-4 py-2"
            ref={finishedButtonRef}
          >
            New Quote
          </button>
        )}

        {/*<div>*/}
        {/*  <button onClick={toggleModal} className="px-4 py-2 bg-blue-500 text-white rounded">*/}
        {/*    Show Game Stats*/}
        {/*  </button>*/}
        {/*</div>*/}


      </div>

      <div className="absolute right-4 top-4">
        <button
            onClick={toggleModal}
            className="text-black opacity-[0.6] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-md p-1.5 ml-auto inline-flex items-center"
            aria-label="Settings"
        >
            <svg fill="#000000" version="1.1" viewBox="0 0 45.973 45.973" width="40px" height="40px">
                <g>
                    <g>
                        <path d="M43.454,18.443h-2.437c-0.453-1.766-1.16-3.42-2.082-4.933l1.752-1.756c0.473-0.473,0.733-1.104,0.733-1.774    c0-0.669-0.262-1.301-0.733-1.773l-2.92-2.917c-0.947-0.948-2.602-0.947-3.545-0.001l-1.826,1.815    C30.9,6.232,29.296,5.56,27.529,5.128V2.52c0-1.383-1.105-2.52-2.488-2.52h-4.128c-1.383,0-2.471,1.137-2.471,2.52v2.607    c-1.766,0.431-3.38,1.104-4.878,1.977l-1.825-1.815c-0.946-0.948-2.602-0.947-3.551-0.001L5.27,8.205    C4.802,8.672,4.535,9.318,4.535,9.978c0,0.669,0.259,1.299,0.733,1.772l1.752,1.76c-0.921,1.513-1.629,3.167-2.081,4.933H2.501    C1.117,18.443,0,19.555,0,20.935v4.125c0,1.384,1.117,2.471,2.501,2.471h2.438c0.452,1.766,1.159,3.43,2.079,4.943l-1.752,1.763    c-0.474,0.473-0.734,1.106-0.734,1.776s0.261,1.303,0.734,1.776l2.92,2.919c0.474,0.473,1.103,0.733,1.772,0.733    s1.299-0.261,1.773-0.733l1.833-1.816c1.498,0.873,3.112,1.545,4.878,1.978v2.604c0,1.383,1.088,2.498,2.471,2.498h4.128    c1.383,0,2.488-1.115,2.488-2.498v-2.605c1.767-0.432,3.371-1.104,4.869-1.977l1.817,1.812c0.474,0.475,1.104,0.735,1.775,0.735    c0.67,0,1.301-0.261,1.774-0.733l2.92-2.917c0.473-0.472,0.732-1.103,0.734-1.772c0-0.67-0.262-1.299-0.734-1.773l-1.75-1.77    c0.92-1.514,1.627-3.179,2.08-4.943h2.438c1.383,0,2.52-1.087,2.52-2.471v-4.125C45.973,19.555,44.837,18.443,43.454,18.443z     M22.976,30.85c-4.378,0-7.928-3.517-7.928-7.852c0-4.338,3.55-7.85,7.928-7.85c4.379,0,7.931,3.512,7.931,7.85    C30.906,27.334,27.355,30.85,22.976,30.85z"/>
                    </g>
                </g>
            </svg>

        </button>
      </div>

    </div>
  );
};

export default Typer;
