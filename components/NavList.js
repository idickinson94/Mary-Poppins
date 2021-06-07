import Link from "next/link";
import styles from "../styles/Mob.module.scss";

const NavList = () => {
  return (
    <div className={styles.mob}>
      <ul>
        <Link href="/">
          <a>
            <li>home</li>
          </a>
        </Link>

        <Link href="/about">
          <a>
            <li>about</li>
          </a>
        </Link>

        <Link href="/program">
          <a>
            <li>program</li>
          </a>
        </Link>

        <Link href="https://www.visitfrasercoast.com/plan-your-visit/">
          <a target="_blank">
            <li>Visit Us</li>
          </a>
        </Link>

        <Link href="/contact">
          <a>
            <li>Contact Us</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default NavList;
