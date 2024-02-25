// components/Modal.tsx

import React from 'react';
import { useGameContext } from '../../context/GameContext';
import {useTyperContext} from "../../context/TyperContext";

const Modal: React.FC = () => {
    const { laps, isModalOpen, toggleModal } = useGameContext();
    const { restart, setGameStarted } = useTyperContext({});

    if (!isModalOpen) return null;

    const playAnotherLap = () => {
        toggleModal();

        const time = new Date();
        time.setSeconds(time.getSeconds() + 30);
        restart(time);
        setGameStarted(true);
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={toggleModal}>
            <div className="relative top-20 mx-auto p-5 border w-[400px] md:-[w-500px] lg:w-[900px] min-h-[500px] shadow-lg rounded-md bg-[#c69f68] flex flex-col justify-between" onClick={(e) => e.stopPropagation()}>
                <div className="absolute right-2 top-2">
                    <button
                        onClick={toggleModal}
                        className="text-black opacity-[0.6] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-md p-1.5 ml-auto inline-flex items-center"
                        aria-label="Close"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className="mt-3 text-center">
                    <h3 className="text-2xl leading-6 font-medium text-gray-900">Game Stats</h3>
                    <div className="mt-2">
                        {laps.map((lap, index) => (
                            <p key={index} className="text-lg text-gray-700">
                                Lap {index + 1}: {lap.wpm} WPM, {lap.totalWords} Total Words
                            </p>
                        ))}
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-4 px-8 rounded" onClick={playAnotherLap}>Play another round</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
