import { ThemeProvider } from "next-themes";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ChallengesProvider>
        <CountdownProvider>
          <Component {...pageProps} />
        </CountdownProvider>
      </ChallengesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
