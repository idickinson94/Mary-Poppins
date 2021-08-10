import Head from "next/head";
import Hero from "../components/InnerHero";
import styles from "../styles/Program.module.scss";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";

const dayOneQuery = `*[_type == "dayone"]{
  name,
  location,
  time, 
  tickets
} `;

const dayTwoQuery = `*[_type == "daytwo"]{
  name,
  location,
  time, 
  tickets
} `;

const dayThreeQuery = `*[_type == "daythree"]{
  name,
  location,
  time, 
  tickets
} `;

const dayFourQuery = `*[_type == "dayfour"]{
  name,
  location,
  time,
  tickets
} `;

const Program = ({ dayOneData, dayTwoData, dayThreeData, dayFourData }) => {
  return (
    <div className={styles.program}>
      <Head>
        <title>Program | Mary Poppins Festival 2021 </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero title="Festival Program" />

      <div className={styles.container}>
        {console.log(dayOneData)}
        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>01</span>
            </h5>
            <h6>Thursday 26th August</h6>
          </div>
          <div className={styles.item_content}>
            {dayOneData.map((dayOne) => (
              <div key={dayOne.name}>
                <p>
                  {dayOne.name} | {dayOne.location} | {dayOne.time}
                </p>
                {dayOne.tickets ? (
                  <p>
                    | More info
                    <Link href={dayOne.tickets}>
                      <a> here. </a>
                    </Link>
                  </p>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>02</span>
            </h5>
            <h6>Friday 27th August</h6>
          </div>
          <div className={styles.item_content}>
            {dayTwoData.map((dayTwo) => (
              <div key={dayTwo.name}>
                <p>
                  {dayTwo.name} | {dayTwo.location} | {dayTwo.time}
                </p>
                {dayTwo.tickets ? (
                  <p>
                    | More info
                    <Link href={dayTwo.tickets}>
                      <a> here. </a>
                    </Link>
                  </p>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>03</span>
            </h5>
            <h6>Saturday 28th August</h6>
          </div>
          <div className={styles.item_content}>
            {dayThreeData.map((dayThree) => (
              <div key={dayThree.name}>
                <p>
                  {dayThree.name} | {dayThree.location} | {dayThree.time}
                </p>
                {dayThree.tickets ? (
                  <p>
                    | More info
                    <Link href={dayThree.tickets}>
                      <a> here. </a>
                    </Link>
                  </p>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>04</span>
            </h5>
            <h6>Sunday 29th August</h6>
          </div>
          <div className={styles.item_content}>
            {dayFourData.map((dayFour) => (
              <div className={styles.details} key={dayFour.name}>
                <p>
                  {dayFour.name} | {dayFour.location} | {dayFour.time}
                </p>
                {dayFour.tickets ? (
                  <p>
                    | More info
                    <Link href={dayFour.tickets}>
                      <a> here. </a>
                    </Link>
                  </p>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const dayOneData = await sanityClient.fetch(dayOneQuery);
  const dayTwoData = await sanityClient.fetch(dayTwoQuery);
  const dayThreeData = await sanityClient.fetch(dayThreeQuery);
  const dayFourData = await sanityClient.fetch(dayFourQuery);
  return { props: { dayOneData, dayTwoData, dayThreeData, dayFourData } };
}

export default Program;
