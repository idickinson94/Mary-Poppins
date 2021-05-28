import styles from "../styles/Poppins.module.scss";

const AnimatedPoppins = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buildings}>
        <img className={styles.marypoppins} src="/mpoppins.png" />
        <img className={styles.clouds} src="/cloudgroup.png" />
      </div>
    </div>
  );
};

export default AnimatedPoppins;
