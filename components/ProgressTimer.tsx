import { useTyperContext } from "./context/typer_context";

const ProgressTimer = () => {
  // @ts-ignore
  const { timePast }: any = useTyperContext({});

  return (
    <div className="progress-timer">
      <div className="progress-timer__bar">
        <div
          className="progress-timer__bar__progress"
          style={{ width: `${(timePast / 29) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressTimer;
