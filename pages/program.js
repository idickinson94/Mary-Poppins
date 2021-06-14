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
            <p>Maryborough Markets, Maryborough CBD, 7am - 12 noon</p>
            <p>Basket Weaving Workshop Gatakers Artspace</p>
            <p>Gatakers Artspace, Gatakers Artspace, 9.30am - 3:30pm</p>
            <p>Story Bank, Story Bank Museum, 9:30am - 3:30pm</p>
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
            <p>Bond Store, Bond Store, 9:30 - 3:30pm</p>
            <p>Story Bank, Story Bank Museum, 9:30 - 3:30pm</p>
            <p>Gatakers Artspace, Gatakers Artspace, 9.30am - 3:30pm</p>
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
            <p>Gatakers Artspace, Gatakers Artspace, 9.30am - 4pm</p>
            <p>Recycled Materials Workshop, Gatakers Artspace, 1pm - 4pm</p>
            <p>Charlotte's Web, Brolga Theatre, 10:30am - 11:25am</p>
            <p>Bond Store, Bond Store, 9:30 - 2pm</p>
            <p>Story Bank, Story Bank Museum, 9:30 - 2pm</p>
          </div>
        </div>

        <div className={styles.program_item}>
          <div className={styles.day}>
            <h5>
              Day <span>04</span>
            </h5>
          </div>
          <div className={styles.item_content}>
            <p>Gatakers Artspace Gatakers Artspace 9.30am - 4pm</p>
            <p>
              Recycled Materials Workshop Gatakers Artspace 10am - 12 noon | 1pm
              - 4pm
            </p>
            <p>
              The Ten Tenors - Celebrating 25 Years Brolga Theatre 3pm - 5:15pm
            </p>
            <p>Story Bank Story Bank Museum 9:30 - 2pm</p>
            <p>Bond Store Bond Store 9:30 - 2pm</p>
            <p>Maryborough Military & Colonial Museum 9:30am - 4pm $2 Entry</p>
            <p>
              Mary Ann Steam Train Macaliser Station From 10am $3 - $12 Entry
            </p>
            <p>
              Portside Cafe & Restaurant Portside Cafe & Restaurant 7am - late
            </p>
            <br />

            <div className={styles.day}>
              <h6>Sunday in the Park</h6>
            </div>
            <br />
            <p>Welcome to Country Main Stage 10am - 10:15am</p>
            <p>Robyn Osborne Mary River Parklands 10:15am- 11:00am</p>
            <p>Jon Vea Vea 10:15am- 11:00am</p>
            <p>Magic Show Queens Park 10:15am- 11:00am</p>
            <p>Movie Trivia Band Hall 10:30am- 11:15am</p>
            <p>Time Cannon Portside 11:00am- 11:15am | 4:00pm - 4:15pm</p>
            <p>Bre Ferguson 11:10am- 11:55am</p>
            <p>Marsupial Madness Queens Park 11:30am- 12:00pm</p>
            <p>Chris Collins Mary River Parklands 11:30am- 12:15pm</p>
            <p>Magic Workshop 11:30am- 12:15pm</p>
            <p>Marc Bright (Show) 11:45am- 12:15pm</p>
            <p>Gums & Roses Queens Park 12:10pm- 12:55pm</p>
            <p>The Grand Parade 12:30pm- 1pm</p>
            <p>
              Chimney Sweep & Nanny Race Challenge Awards Main Stage 12:45pm-
              1pm
            </p>
            <p>Fashion in the Park Main Stage 1:00pm- 1:30pm</p>
            <p>Book Time Mary River Parklands 1pm- 1:45pm</p>
            <p>
              Teddy Bear Picnic in Wonderland Show Queens Park 1:10pm- 1:40pm
            </p>
            <p>Peter Sajko 1:15pm- 2:00pm</p>
            <p>Mary Poppins Trivia Band Hall 1:30pm- 2:15pm</p>
            <p>Science Show Queens Park 2pm- 2:45pm</p>
            <p>Marc Bright (Show) Main Stage 2pm- 2:30pm</p>
            <p>Book Time Mary River Parklands 2:05pm- 2:50pm</p>
            <p>Charlene Walters 2:10pm- 2:55pm</p>
            <p>Excelsior Band Queens Park 3pm- 3:45pm</p>
            <p>Music Trivia Band Hall 3pm- 3:45pm</p>
            <p>
              The TEN Tenors- Celebrating 25 Years Brolga Theatre 3pm- 5:15pm
            </p>
            <p>Book Time Mary River Parklands 3:10pm- 3:55pm</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
