import { useState } from "react";
import styles from "../styles/Nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";

const Navbar = ({ navOpen, setNavOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.navbar}>
          <div className="logo">
            <Link href="/">
              <a>
                <Image src="/logo.png" width={110} height={80} alt="logo" />
              </a>
            </Link>
          </div>

          <nav>
            <ul>
              <Link href="/">
                <a>
                  <li>Home</li>
                </a>
              </Link>

              <Link href="/about">
                <a>
                  <li>about</li>
                </a>
              </Link>

              <Link href="/program">
                <a>
                  <li>Program</li>
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
          </nav>

          <div className="logo" id="teq">
            <Link href="/">
              <a>
                <Image src="/TEQ.png" width={110} height={50} alt="its live" />
              </a>
            </Link>
          </div>

          <div className={styles.mobile_nav}>
            <Image
              className={styles.toggle}
              onClick={(e) => setNavOpen(!navOpen)}
              src="/nav-toggle.png"
              width={30}
              height={30}
            />

            {navOpen ? <NavList /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
