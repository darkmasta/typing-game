import React, { useEffect } from "react";
import styled from "styled-components";

const QuoteContainer = styled.div`
  margin-bottom: 100px;
`;

interface Quote {
  quote: string;
  userText: string[];
}

const Quote: React.FC<Quote> = ({ quote, userText }) => {
  const renderQuote = (): JSX.Element[] => {
    return quote.split("").map((letter, index) => {
      if (userText[index] === letter) {
        return (
          <span key={index} className="green">
            {letter}
          </span>
        );
      } else if (userText[index] === undefined) {
        return (
          <span key={index} className="white">
            {letter}
          </span>
        );
      } else {
        return (
          <span key={index} className="red">
            {letter}
          </span>
        );
      }
    });
  };

  useEffect(() => {
    console.log(userText);
  }, [userText]);

  return <QuoteContainer>{renderQuote()}</QuoteContainer>;
};

export default Quote;
