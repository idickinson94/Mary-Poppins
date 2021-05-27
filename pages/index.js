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
      <AnimatedMP />
    </div>
  );
}
