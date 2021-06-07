import Hero from "../components/InnerHero";
import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Hero title="Contact Us" />

      <form
        className={styles.form_container}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <div className={styles.name}>
          <div className={styles.p_form}>
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" id="fname" name="fname"></input>
            <label className={styles.label} for="fname">
              First name
            </label>
          </div>

          <div className={styles.p_form}>
            <input type="text" id="lname" name="lname"></input>
            <label className={styles.label} for="lname">
              Last name
            </label>
          </div>
        </div>

        <div className={styles.p_form}>
          <label for="email">
            <h6>Email</h6>
          </label>
          <input type="email" id="email" name="email"></input>
        </div>

        <div className={styles.p_form}>
          <label for="message">
            <h6>Enquiry</h6>
          </label>
          <textarea
            id="message"
            name="enquiry"
            placeholder="Enter your enquiry here"
            rows="10"
            cols="50"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
