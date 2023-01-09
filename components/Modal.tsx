import React from "react";

const Modal = ({
  fetchNewQuote,
  setIsStarted,
  setTimer,
  finishedButtonRef,
}) => {
  return (
    <div className="">
      <div className="row">
        <button
          onClick={fetchNewQuote}
          className="bg-transparent rounded-sm border-2 border-solid border-pink-500 bg-pink-500 text-white"
        >
          New Quote
        </button>

        {!isStarted && !timer && (
          <button
            onClick={() => {
              setIsStarted(false);
              setTimer(false);
              fetchNewQuote();
            }}
            className="bg-transparent rounded-sm border-2 border-solid border-[pink] border-pink-500 bg-pink-500  text-white ml-4"
            ref={finishedButtonRef}
          >
            Finished
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
