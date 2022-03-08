import React from "react";
import styles from "./footer.module.css";
import BlackLogo from "../images/readerChallengeWhite.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className={styles.container}>
      <Container fluid className={styles.infoContainer}>
        <Row>
          <Col className={styles.contact}>
            <Row>
              <h5>تواصل معنا</h5>
            </Row>
            <div>
              <a href={"/"} className={styles.icon}>
                <IoLogoWhatsapp />
              </a>
              <a href={"/"} className={styles.icon}>
                <AiFillTwitterCircle />
              </a>
            </div>
          </Col>
          <Col className={styles.logoContainer}>
            <img
              src={BlackLogo}
              alt="شعار معمور"
              className={styles.BlackLogo}
            ></img>
            <h3 className={styles.title}>
              تحدي <span className={styles.titleCustom}>القراء</span>
            </h3>
            <p className={styles.subTitle}>قيد صيودك بالحبال الواثقة</p>
          </Col>
          <Col className={styles.location}>
            <h5>موقع الإنجاز</h5>
            <a href={"/"} className={styles.icon}>
              <HiLocationMarker />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
