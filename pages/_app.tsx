import type { AppProps } from "next/app";
import "focus-visible";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
