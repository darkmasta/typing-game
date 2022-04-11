import React from "react";
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
    cursor: pointer;
  }
`;

interface Props {
  children: React.ReactNode;
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartButton: React.FC<Props> = ({ children, setIsGameStarted }) => {
  const handleClick = () => {
    setIsGameStarted(true);
  };
  return (
    <div>
      <Button>{children}</Button>
    </div>
  );
};

export default StartButton;
