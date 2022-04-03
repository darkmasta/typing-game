import React, { useEffect, useState, useRef } from "react";
import Quote from "./Quote";
import StartButton from "./StartButton";
import styled from "styled-components";

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
  const [isStarted, setIsStarted] = React.useState<boolean>(true);
  const [quote, setQuote] = useState<string>(
    '"The best way to predict the future is to create it."'
  );
  const [auther, setAuther] = useState<string>("Abraham Lincoln");
  const [userText, setUserText] = useState<string[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const finishedButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyPress = (e: string): void => {
    setUserText(e.split(""));
  };
  // typescript onChange event handler react
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {};

  const fetchNewQuote = (): void => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setUserText([]);
        setAuther(data.author);
        setIsStarted(true);
        inputRef.current?.focus();
      });
  };

  useEffect(() => {
    if (userText.length == quote.length) {
      setIsStarted(false);
      finishedButtonRef.current?.focus();
      // console.log("game ended");
    }
  }, [userText]);

  return (
    <div className="container">
      <div className="text-quote">
        <Quote quote={quote} userText={userText} />
        <div>
          ---- <i>{auther}</i>
        </div>
      </div>
      <div className="text">
        <textarea
          id="input-text"
          autoFocus
          ref={inputRef}
          name="input-text"
          value={userText.join("")}
          onChange={(e) => handleKeyPress(e.currentTarget.value)}
        ></textarea>
      </div>
      <div className="row">
        <Button onClick={fetchNewQuote}>New Quote</Button>

        {/* {isStarted && <Button onClick={fetchNewQuote}>New Quote</Button>} */}
        {!isStarted && (
          <Button
            onClick={() => {
              setIsStarted(false);
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
