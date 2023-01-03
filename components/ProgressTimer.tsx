import { useTyperContext } from "./context/typer_context";
import { useEffect } from "react";

const ProgressTimer = () => {
  // @ts-ignore
  const { timePast }: any = useTyperContext({});
  console.log(timePast);

  return (
    <div
      className="absolute top-0 left-0 h-4 w-4 bg-amber-500"
      style={{ width: `${(timePast / 29) * 100}%` }}
    ></div>
  );
};

export default ProgressTimer;
