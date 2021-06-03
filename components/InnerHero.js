import styles from "../styles/InnerHero.module.scss";

const Hero = ({ title }) => {
  return (
    <div className={styles.hero}>
      <h3> {title} </h3>
    </div>
  );
};

export default Hero;
