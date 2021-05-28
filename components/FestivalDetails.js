import styles from "../styles/Festival.module.scss";
import Link from "next/link";

const FestivalDetails = () => {
  return (
    <div className={styles.FestivalDetails}>
      <h2> Festival Details</h2>

      <div className={styles.details}>
        <div className={styles.card}>
          <h3> When & Where </h3>
          <p>July 1- 4 at the Portside Precint, Maryborough</p>
        </div>

        <div className={styles.card}>
          <h3> Admission </h3>
          <p>This is a a free event perfect for the family.</p>
        </div>

        <div className={styles.card}>
          <h3> Parking </h3>
          <p>Street parking throught the surrounding CDB.</p>
        </div>
      </div>
      {/*<Link href="/program">
  <a>*/}
      <button>Full program coming soon</button>
      {/* </a>
       </Link> */}
    </div>
  );
};

export default FestivalDetails;
