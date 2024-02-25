import { useTyperContext } from "../../context/TyperContext";
import { useEffect } from "react";

const ProgressTimer = () => {
  const { timePast, seconds } = useTyperContext({});

  return (
    <div
      className="absolute top-0 left-0 h-4 w-4 bg-amber-600"
      style={{ width: `${(parseInt(String(30 - parseInt(seconds)))/ 29) * 100}%` }}
    />
  );
};

export default ProgressTimer;
