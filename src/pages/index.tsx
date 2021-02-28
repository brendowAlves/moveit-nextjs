import { CompletedChallenges } from "../components/CompletedChallenge";
import { ContDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/components/pages/Home.module.css";

import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <ContDown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
