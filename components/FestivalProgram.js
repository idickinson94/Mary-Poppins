import Link from "next/link";
import styles from "../styles/Festival.module.scss";
import Image from "next/image";

const FestivalProgram = () => {
  return (
    <div className={styles.prog}>
      <h2>Festival Program</h2>
      <div className={styles.progCard}>
        <div className={styles.img}></div>
        <div className={styles.text}>
          <h4>Coming soon</h4>
          <p>
            Stay tuned for the program release in the coming weeks. For now, sit
            back, save the date and start planning!
          </p>
        </div>
      </div>

      <Link href="/program">
        <a>
          <button>Full program coming soon</button>
        </a>
      </Link>
    </div>
  );
};

export default FestivalProgram;