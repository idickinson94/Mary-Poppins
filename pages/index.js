import Head from "next/head";
import Image from "next/image";
import AnimatedMP from "../components/buildings";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.hero}>
        <h4>Make the impossible possible at the</h4>
        <h1>Mary Poppins Festival</h1>
      </div>

      <div className="info">
        <h3>Welcome to the 13th Annual Mary Poppins Festival</h3>
        <p>
          This year’s Festival presents a four day program of storytelling for
          all ages through all art forms. From music concerts backstage and
          onstage at the Brolga to pop up performances in the Bond Store
          Basement.
        </p>
      </div>

      <AnimatedMP />
    </div>
  );
}
