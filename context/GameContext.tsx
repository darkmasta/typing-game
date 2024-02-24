import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GameData {
    laps: Array<{
        wpm: number;
        accuracy: number;
    }>;
    addLap: (lap: { wpm: number; accuracy: number }) => void;
    isModalOpen: boolean;
    toggleModal: () => void;
}

const defaultState: GameData = {
    laps: [],
    addLap: () => {},
    isModalOpen: false,
    toggleModal: () => {},
};

const GameContext = createContext<GameData>(defaultState);

export const useGameContext = () => useContext(GameContext);

interface GameProviderProps {
    children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
    const [laps, setLaps] = useState<Array<{ wpm: number; accuracy: number }>>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const addLap = (lap: { wpm: number; accuracy: number }) => {
        setLaps((prevLaps) => [...prevLaps, lap]);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <GameContext.Provider value={{ laps, addLap, isModalOpen, toggleModal }}>
            {children}
        </GameContext.Provider>
    );
};
