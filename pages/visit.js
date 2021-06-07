import Hero from "../components/InnerHero";
import styles from "../styles/Visit.module.scss";
import ReactPlayer from "react-player";

const Visit = () => {
  return (
    <div>
      <Hero title="Visit Us" />
      <div className={styles.container}>
        <p>
          So, you’ve filled your calendar to the brim with magical Mary Poppins
          moments? Don’t forget to plan your stay on the Fraser Coast while
          you’re at it. The Fraser Coast is a region of amazing diversity with
          some of Queensland’s great icons on our doorstep.
        </p>

        <p>
          This is the home of big nature experiences – where you can stand
          dwarfed by centuries-old trees that grow from sand on Fraser Island,
          swim with giant humpbacks as they play along the Hervey Bay coast or
          in the company of hundreds of manta rays off Fraser Island. It is also
          the place of simple pleasures, offering families a wide choice of
          relaxing activites, without the stress of crowds often present at
          larger tourist areas.
        </p>

        <div className={styles.video}>
          <ReactPlayer url="https://vimeo.com/468028449" controls />
        </div>

        <div className="cta">
          <h3>Get to know the Fraser Coast</h3>
          <button>Plan your visit</button>
        </div>
      </div>
    </div>
  );
};

export default Visit;
