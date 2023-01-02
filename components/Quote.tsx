import React, { useEffect } from "react";

interface Quote {
  quote: string;
  userText: string[];
}

const Quote: React.FC<Quote> = ({ quote, userText }) => {
  const renderQuote = (): JSX.Element[] => {
    return quote.split("").map((letter: string, index: number) => {
      if (userText.length === 0 && index === 0) {
        return (
          <span key={index} className={`white cursor-left`}>
            {letter}
          </span>
        );
      }
      if (userText[index] === letter) {
        if (userText.length == index + 1) {
          return (
            <span
              key={index}
              className={`correct cursor ${
                userText.length === 0 ? "cursor-left" : ""
              }`}
            >
              {letter}
            </span>
          );
        } else {
          return (
            <span key={index} className="correct">
              {letter}
            </span>
          );
        }
      } else if (userText[index] === undefined) {
        return (
          <span key={index} className="white">
            {letter}
          </span>
        );
      } else {
        if (userText.length == index + 1) {
          return (
            <span key={index} className="wrong cursor">
              {letter}
            </span>
          );
        } else {
          return (
            <span key={index} className="wrong">
              {letter}
            </span>
          );
        }
      }
    });
  };

  return <div className="mb-[70px] max-w-[1200px]">{renderQuote()}</div>;
};

export default Quote;
