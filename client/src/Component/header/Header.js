import React from "react";
import styles from "./header.module.css";
import MaamourLogo from "../images/صيد القراءة.png";

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>
          صيد <span className={styles.titleCustom}>وقيد</span>
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
