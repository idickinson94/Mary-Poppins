import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
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

        <Link href="/contact">
          <a>
            <li>Contact Us</li>
          </a>
        </Link>
      </ul>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.png" width={110} height={80} alt="logo" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
