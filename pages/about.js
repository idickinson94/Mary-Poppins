import Hero from "../components/InnerHero";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>About | Mary Poppins Festival 2021 </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="The Mary Poppins Festival in Maryborough QLD, honouring the author of Mary Poppins Book, includes theatre experiences, workshops, activities and exhibitions."
        />
      </Head>
      <Hero title="About Mary Poppins" />
      <div className={styles.content}>
        <p>
          Maryborough, Queensland has a unique link to the world’s most famous
          nanny that no other place in the world can claim. It is the birthplace
          of Mary Poppins author Pamella Lyndon Travers, whose beloved novels
          were brilliantly adapted for the popular Disney movie of the same name
          and the award winning musical.
        </p>
        <p>
          Maryborough celebrates its connection to Mary Poppins in many ways and
          the annual Mary Poppins Festival, now in its 13th year, is believed to
          be the first in the world to celebrate Mary Poppins and the success of
          her creator.
        </p>
        <p>
          Maryborough’s riverside parks and heritage streetscapes provide a
          perfect setting for the festival with a range of other magical Mary
          experiences guaranteed to delight both young and old.
        </p>

        <div className={styles.marys}>
          <div className={styles.left}>
            <h4>The Proud Marys</h4>
            <p>
              The Proud Marys are an international association for women whose
              name contains ‘Mary’ or a derivative. The organisation was formed
              in Maryborough in 1999 with a small band of volunteers determined
              to raise the profile of Maryborough as the birthplace of P.L.
              Travers.
            </p>
            <p>
              Their annual morning tea was the catalyst for the Mary Poppins
              Festival. The Proud Marys members were also the driving force
              behind the Mary Poppins statue, erected in Richmond Street in 2005
              outside of the author’s birthplace.
            </p>
          </div>
          <div className={styles.right}></div>
        </div>

        <div className={styles.travers}>
          <div className={styles.left}>
            <h4>P.L. Travers</h4>
            <p>
              Pamela Travers was born Helen Lyndon Goff in Maryborough on 9
              August 1899 to parents Margaret and Robert Goff. Helen’s father
              was the manager of the Australian Joint Stock Bank and she was
              born in a bedroom of the second storey residence of the building
              in Kent Street.
            </p>
            <p>
              After spending the first few years of her life in Maryborough, her
              family moved to Brisbane then Ipswich, Allora, Bowral and then
              Sydney. In Sydney, Helen began a career as a dancer and an actress
              appearing mainly in Shakespearean plays in Australia and New
              Zealand. At the age of 25 Helen moved to England seeking literary
              fame and fortune, adopting the name P.L Travers for her writing.
            </p>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </div>
  );
};

export default About;
