import Head from "next/head";
import Image from "next/image";
import FestivalDetails from "../components/FestivalDetails";
import FestivalProgram from "../components/FestivalProgram";
import Quote from "../components/Quote";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Head>
        <title>Mary Poppins Festival 2021 | Maryborough Parklands</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.hero}>
        <h4>Make the impossible possible at the</h4>
        <h1>Mary Poppins Festival</h1>
      </div>

      <div className={styles.info}>
        <h3>Welcome to the 13th Annual Mary Poppins Festival!</h3>
        <p>
          This year’s Festival presents a four day program of storytelling for
          all ages through all art forms. From music concerts backstage and
          onstage at the Brolga to pop up performances in the Bond Store
          Basement. The signature event is the Mary Poppins Festival Day in the
          Park where Maryborough's glorious heritage streetscapes are
          transformed into scenes from the Poppins novels. Nannies race each
          other pushing prams in the great Nanny Challenge, chimney sweeps
          compete in the Chimney Sweep Dash while Mary Poppins characters come
          to life from the pages of books and mingle with the crowd.
        </p>

        <p>
          The festival honours the author of the Mary Poppins books, Pamela
          Lyndon Travers, who was born Helen Lyndon Goff in an upstairs bedroom
          of the former Australian Joint Stock Bank building in Maryborough on 9
          August 1899. The bank is now an interactive museum called the Story
          Bank of Maryborough, which will feature prominently in the festival.
        </p>
      </div>

      <Quote text="“FOR WHEN YOU DREAM, YOU’LL FIND ALL THAT’S LOST, IS FOUND.” – MARY POPPINS" />

      <FestivalDetails />

      <FestivalProgram />
    </div>
  );
}
