import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Head from "next/head";

import { CompletedChallenges } from "../components/CompletedChallenge";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  function setThemeDark() {
    setTheme("dark");
  }

  function setThemeLigth() {
    setTheme("light");
  }

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 10,
        }}
      >
        {theme === "dark" ? (
          <button onClick={setThemeLigth} style={{ outline: 0, border: 0 }}>
            <img style={{ width: 30 }} src="icons/sun.svg" alt="" />
          </button>
        ) : (
          <button onClick={setThemeDark} style={{ outline: 0, border: 0 }}>
            <img style={{ width: 30 }} src="icons/moon.svg" alt="" />
          </button>
        )}
      </div>

      <Head>
        <title>Início | move.it</title>
      </Head>
      {console.log(theme)}

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
