import "../styles/globals.css";
import "../styles/main.css";
import type { AppProps } from "next/app";

import { TyperProvider } from '../context/TyperContext'
import { GameProvider } from '../context/GameContext';
import Modal from '../components/ui/Modal';


export default function App({ Component, pageProps }: AppProps) {


    return (
      <GameProvider>
        <TyperProvider>
          <Component {...pageProps} />
          <Modal />
        </TyperProvider>
      </GameProvider>
  );
}
