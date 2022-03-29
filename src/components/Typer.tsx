import React, { useState } from "react";

const Typer: React.FC = () => {
  const [isStarted, setIsStarted] = React.useState<boolean>(false);

  const handleKeyPress = (e: string) => {
    console.log(e.split(""));
  };
  // typescript onChange event handler react
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {};

  return (
    <div className="container">
      <div className="row">
        <button className="start-button" onClick={() => setIsStarted(true)}>
          Start
        </button>
      </div>
      <div className="text">
        <textarea
          id="input-text"
          onChange={(e) => handleKeyPress(e.currentTarget.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Typer;
