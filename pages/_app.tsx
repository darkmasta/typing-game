import "../styles/globals.css";
import "../styles/main.css";
import type { AppProps } from "next/app";

import { TyperProvider } from "../components/context/typer_context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TyperProvider>
      <Component {...pageProps} />
    </TyperProvider>
  );
}
