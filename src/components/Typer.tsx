import React, { useState } from "react";
import Quote from "./Quote";
import Button from "./StartButton";

const Typer: React.FC = () => {
  const [isStarted, setIsStarted] = React.useState<boolean>(false);
  const [quote, setQuote] = useState<string>(
    '"The best way to predict the future is to create it." - Abraham Lincoln'
  );
  const [userText, setUserText] = useState<string[]>([]);

  const handleKeyPress = (e: string): void => {
    setUserText(e.split(""));
  };
  // typescript onChange event handler react
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {};

  return (
    <div className="container">
      <div className="text-quote">
        <Quote quote={quote} userText={userText} />
      </div>
      <div className="text">
        <textarea
          id="input-text"
          onChange={(e) => handleKeyPress(e.currentTarget.value)}
        ></textarea>
      </div>
      <div className="row">
        <Button setIsGameStarted={setIsStarted}>Start Game</Button>
      </div>
    </div>
  );
};

export default Typer;
