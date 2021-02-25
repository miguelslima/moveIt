import { ThemeProvider } from "next-themes";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
