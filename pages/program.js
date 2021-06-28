import Head from "next/head";
import Hero from "../components/InnerHero";
import styles from "../styles/Program.module.scss";
import Link from "next/link";

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
            <h6>Thursday 1st of July</h6>
          </div>
          <div className={styles.item_content}>
            <p>Maryborough Markets, Maryborough CBD, 7am - 12 noon</p>
            <p>Gatakers Artspace, Gatakers Artspace, 9.30am - 3:30pm</p>
            <p>
              Story Bank, Story Bank Museum, 9:30am - 3:30pm | Bookings
              essential, book{" "}
              <Link href="https://storybank.ourfrasercoast.com.au/">
                <a>here.</a>
              </Link>{" "}
            </p>
            <p>Bond Store, Bond Store, 9:30 - 3:30pm</p>
            <p>
              Practically Perfect Decorated Upmbella’s, Story Bank Garden | book{" "}
              <Link href="https://frasercoast.rezdy.com/448782/practically-perfected-decorated-umbrellas#">
                <a>here.</a>
              </Link>{" "}
            </p>
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>02</span>
            </h5>
            <h6>Friday 2nd July</h6>
          </div>
          <div className={styles.item_content}>
            <p>Bond Store, Bond Store, 9:30 - 3:30pm</p>
            <p>
              Story Bank, Story Bank Museum, 9:30 - 3:30pm | Bookings essential,
              book{" "}
              <Link href="https://storybank.ourfrasercoast.com.au/">
                <a>here.</a>
              </Link>{" "}
            </p>
            <p>Gatakers Artspace, Gatakers Artspace, 9.30am - 3:30pm</p>

            <p>
              Rock Me Up and Celebrate, Brolga Theatre, 1:30pm | Bookings
              essential, book{" "}
              <Link href="https://brolgat.sales.ticketsearch.com/sales/salesevent/12793">
                <a>here.</a>
              </Link>{" "}
            </p>
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>03</span>
            </h5>
            <h6>Saturday 3rd of July</h6>
          </div>
          <div className={styles.item_content}>
            <p>
              Gatakers Artspace, Gatakers Artspace, 9.30am - 4pm | register{" "}
              <Link href="https://storybank.ourfrasercoast.com.au/events/event/460/upcycled-clothing-workshop-with-nancy-brown ">
                <a>here.</a>
              </Link>
            </p>
            <p>
              Recycled Materials Workshop, Gatakers Artspace, 1pm - 4pm | Gold
              Coin / $5
            </p>
            <p>
              Charlotte's Web, Brolga Theatre, 10:30am - 11:25am | Bookings
              essential, book{" "}
              <Link href="https://brolga.ourfrasercoast.com.au/events/event/421/charlotte-s-web ">
                <a>here.</a>
              </Link>{" "}
            </p>
            <p>Bond Store, Bond Store, 9:30 - 3:30pm | $2.50 - $12.50 </p>
            <p>
              Story Bank, Story Bank Museum, 9:30 - 3:30pm | Bookings essential,
              book{" "}
              <Link href="https://storybank.ourfrasercoast.com.au/">
                <a>here.</a>
              </Link>
            </p>
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>04</span>
            </h5>
            <h6>Sunday 4th of July</h6>
          </div>
          <div className={styles.item_content}>
            <p>Gatakers Artspace Gatakers Artspace 9.30am - 4pm</p>
            <p>
              Recycled Materials Workshop Gatakers Artspace 10am - 12 noon & 1pm
              - 4pm | Gold Coin
            </p>
            <p>
              The Ten Tenors - Celebrating 25 Years Brolga Theatre 3pm - 5:15pm
              | Bookings essential, book{" "}
              <Link href="https://brolga.ourfrasercoast.com.au/events/event/337/the-ten-tenors-celebrating-25-years">
                <a>here.</a>
              </Link>
            </p>
            <p>
              Story Bank Story Bank Museum 10am - 4pm | Bookings essential, book{" "}
              <Link href="https://storybank.ourfrasercoast.com.au/">
                <a>here.</a>
              </Link>
            </p>
            <p>Bond Store Bond Store | 10am - 4pm</p>
            <p>
              Maryborough Military & Colonial Museum | 9:30am - 4pm $2 Entry
            </p>
            <p>
              Mary Ann Steam Train Macaliser Station From 10am | $3 - $12 Entry
            </p>
            <p>
              Portside Cafe & Restaurant Portside Cafe & Restaurant | 7am - late
            </p>
            <br />

            <div className={styles.day}>
              <h6>Sunday in the Park</h6>
            </div>
            <br />
            <p>Welcome to Country Main Stage | 10am - 10:15am</p>
            <p>Robyn Osborne | Book Time | 10:15am- 11:00am</p>
            <p>Jon Vea Vea | Solo Mat |10:15am- 11:00am</p>
            <p>Magic Show Queens Park| Rotunda Stage | 10:15am- 11:00am</p>
            <p>Movie Trivia Band Hall | 10:30am- 11:15am</p>
            <p>Time Cannon Portside | 11:00am- 11:15am | 4:00pm - 4:15pm</p>
            <p>Bre Ferguson | Solo Mat| 11:10am- 11:55am</p>
            <p>Marsupial Madness Queens Park | 11:30am- 12:00pm</p>
            <p>Susan Zela Bissett | Book Time | 11:30am- 12:15pm</p>

            <p>Magic Workshop | 1pm – 1:45pm </p>
            <p>Grumps & Roses | Rotunda Stage | 12:10pm- 12:55pm</p>
            <p>The Grand Parade | 12:30pm- 1pm</p>
            <p>
              Chimney Sweep & Nanny Race Challenge Awards | Main Stage | 1pm -
              1.30pm
            </p>
            <p>Fashion in the Park Main Stage | 1:30pm - 1:45pm</p>
            <p>Chris Collins | Book Time | 2:05pm - 2:50pm </p>
            <p>
              Teddy Bear Picnic in Wonderland Show Queens Park | 1:10pm- 1:40pm
            </p>
            <p>Peter Sajko | Solo Mat | 1:15pm- 2:00pm</p>
            <p>Mary Poppins Trivia Band Hall | 1:30pm- 2:15pm</p>
            <p>Science Show | Rotunda Stage | 2pm- 2:45pm</p>
            <p>
              Marc Bright (Show) Main Stage | 11:30am – 11:50am & 2pm- 2:30pm
            </p>

            <p>Charlene Walters | Solo Mat | 2:10pm- 2:55pm</p>
            <p>Excelsior Band Queens Park | 3pm- 3:45pm</p>
            <p>Music Trivia Band Hall | 3pm- 3:45pm</p>
            <p>
              The TEN Tenors- Celebrating 25 Years Brolga Theatre | 3pm- 5:15pm
            </p>

            <p>
              Marc Bright (Art Mural) Mary River Parklands & Queens Park ALL
            </p>
            <p>
              Kim Manici (Art Circles) Mary River Parklands & Queens Park ALL
            </p>
            <p>
              Will Paes (Chalk Artist) Mary River Parklands & Queens Park ALL
            </p>
            <p>Chimney Sweep Challenge Richmond Street ALL</p>
            <p>The Great Nanny Race Richmond Street ALL</p>
            <p>Crash Box Crew Mary River Parklands & Queens Park All day</p>
            <p>
              Hoozattevents Roving Mary River Parklands & Queens Park All day
            </p>
            <p>
              Glen Rhodes- Roving Mary River Parklands & Queens Park All day
            </p>
            <p>Wayne Fleming Mary River Parklands & Queens Park All day</p>
            <p>MELSA Minature Train Rides | Queens Park | All day | $2pp </p>
            <p>
              Tasting of Ports & Liqueurs - A tipple of Mary's Punch | Bond
              Store | All Day{" "}
            </p>
            <p>
              Storytime | Bond Store, 11am & 1pm | Bookings essential, book{" "}
              <Link href="https://frasercoast.rezdy.com/449593/kiddywinks-puppet-theatre-at-the-bond-store-basement">
                <a>here.</a>
              </Link>{" "}
            </p>
            <p>Story Bank Garden & Cottage | Story Bank | All Day | Free</p>
            <p>
              Storytelling in the Yarning Circle - Auntie Karen sharing stories
              from Legends of Moonie Jarl | Story Bank | 10am - 10:30am | 11am -
              11:30am | Inc in Story Bank Admission | book sold seperately{" "}
              <Link href="https://frasercoast.rezdy.com/448779/storytelling-in-the-yarning-circle#">
                <a>here.</a>
              </Link>{" "}
            </p>

            <p>
              Storytelling with Jane in the Theatrette - Sing Song & Story |
              Story Bank | 12noon - 12:30pm | Inc in Story Bank Admission |
              Bookings essential, book{" "}
              <Link href="https://storybank.ourfrasercoast.com.au/events/event/466/sing-song-and-storytelling-with-nanny-elsie-buttons">
                <a>here.</a>
              </Link>
            </p>

            <p>
              The Inside Story - special tour of The Story Bank | 10.15am,
              11.15am, 1pm, 2pm, 3pm | Inc in Story Bank Admission
            </p>

            <p>Rock Art | Story Bank Garden | All Day | FREE</p>
            <p>
              Moira Hansen playing the Calliope | Story Bank deck | 11am FREE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
