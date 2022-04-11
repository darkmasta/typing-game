import React, { useEffect } from "react";
import styled from "styled-components";

const QuoteContainer = styled.div`
  margin-bottom: 70px;
  max-width: 1200px;
`;

interface Quote {
  quote: string;
  userText: string[];
}

const Quote: React.FC<Quote> = ({ quote, userText }) => {
  const renderQuote = (): JSX.Element[] => {
    return quote.split("").map((letter, index) => {
      if (userText[index] === letter) {
        if (userText.length == index + 1) {
          return (
            <span key={index} className="correct cursor">
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

  return <QuoteContainer>{renderQuote()}</QuoteContainer>;
};

export default Quote;
