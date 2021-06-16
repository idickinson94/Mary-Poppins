import Hero from "../components/InnerHero";
import styles from "../styles/Program.module.scss";
import Link from "next/link";

const Competitions = () => {
  return (
    <div className="container">
      <Hero title="Competitions" />
      <div className={styles.container}>
        <p>
          The Nanny Race & Chimney Sweep challenge are back for 2021. Due to
          social distancing requirements the races will be set up as time
          challenges and run over the course of the day. Line up and take a
          crack at beating the high score on the day.
        </p>
        <div className={styles.program_item}>
          <div className={styles.day}>
            <h6>Chimney Sweep Challenge</h6>
          </div>
          <div className={styles.item_content}>
            <p>
              In this competition participants will be looking to sweep the
              competition out the way and clear out their chimney the fastest.
              One at a time, chimney sweeps will race to the chimney with
              bucket, balloon and sweep in hand. Using the sweep push the
              balloon up and out the chimney, before clicking your heels and
              making your way back to the start line.
            </p>
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h6>Nanny Race</h6>
          </div>
          <div className={styles.item_content}>
            <p>
              In this competition participants will be looking to be the fastest
              pram pusher on Cheery Tree Lane, no magical umbrella assistance
              allowed! One at a time, nannies will race to the finish line all
              while pushing their prams and putting baby to sleep, fastest nanny
              without baby falling out wins!
            </p>
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h6>Dress Up Competition</h6>
          </div>
          <div className={styles.item_content}>
            <p>
              Tell your own story at Mary Poppins Festival with a good old dress
              up competition. Come dress as your favorite character from history
              or literature to be in the running to win. Judged by the Proud
              Mary’s.
            </p>
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h6>Grand Parade</h6>
          </div>
          <div className={styles.item_content}>
            <p>
              If you would like to join us for the Grand Parade through Mary
              Poppins Festival this year please register{" "}
              <Link href="https://www.eventbrite.com.au/e/grand-parade-registration-registration-159363637931">
                <a>here.</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
