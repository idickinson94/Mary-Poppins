import Head from "next/head";
import Hero from "../components/InnerHero";
import styles from "../styles/Program.module.scss";

const Program = () => {
  return (
    <div className={styles.program}>
      <Head>
        <title>Program | Mary Poppins Festival 2021 </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero title="Festival Program" />

      <div className={styles.container}>
        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>01</span>
            </h5>
            <h6>Thursday</h6>
          </div>
          <div className={styles.item_content}>
            <p className={styles.heading}>Coming Soon</p>
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>02</span>
            </h5>
            <h6>Friday</h6>
          </div>
          <div className={styles.item_content}>
            <p className={styles.heading}>Coming Soon</p>
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>03</span>
            </h5>
            <h6>Saturday</h6>
          </div>
          <div className={styles.item_content}>
            <p className={styles.heading}>Coming Soon</p>
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>04</span>
            </h5>
            <h6>Sunday in the Park</h6>
          </div>
          <div className={styles.item_content}>
            <p className={styles.heading}>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
