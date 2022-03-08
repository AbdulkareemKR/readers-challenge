import React from "react";
import styles from "./header.module.css";
import MaamourLogo from "../images/readersChallenge.png";

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>
          تحدي <span className={styles.titleCustom}>القراء</span>
        </h1>
        <a className={styles.titleLink} href="/">
          <img
            src={MaamourLogo}
            alt="شعار"
            className={styles.maamourLogo}
          ></img>
        </a>
      </header>
    </div>
  );
}

export default Header;
