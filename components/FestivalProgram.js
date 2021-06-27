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
          <h4>The Mary Poppins Festival program is here! ☂️🙌</h4>
          <p>
            Set over four days, festivalgoers can expect a stellar lineup of
            performances, entertainment and activities for the whole family. 👨‍👩‍👧‍👦
          </p>

          <p>
            Day 1 (July 1) begins at the renowned Maryborough Markets and
            includes a Basket Weaving Workshop at Gatakers Artspace and ticketed
            tours at Story Bank and Bond Store. 🧶 Day 2 (July 2) includes
            ticketed tours at the unique Story Bank and Bond Store, along with
            entry into Gatakers Artspace. 🎨 Day 3 (July 3) includes a Recycled
            Materials Workshop at Gatakers Artspace, an incredible ticketed
            performance 'Charlotte's Web' at the Brolga Theatre. Again tours are
            available at Story Bank and the Bond Store. 🕸️🎭 Day 4 (July 4) ✨
            DAY IN THE PARK ✨ highlights include the Chimney Sweep and Nanny
            Race Challenge, Best Dressed, Picnic in the Park, various Book
            Times, Trivia, Magic Workshop, art and music performances and much
            more!
          </p>
        </div>
      </div>

      <Link href="/program">
        <a>
          <button>VIEW FULL PROGRAM</button>
        </a>
      </Link>
    </div>
  );
};

export default FestivalProgram;
