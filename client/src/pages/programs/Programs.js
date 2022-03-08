import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import styles from "./programs.module.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { MdOutlineMenuBook } from "react-icons/md";

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <div className={styles.container} >
      <Fade
        durtion={1200}
        cascade
        damping={0.02}
        triggerOnce // to present each element on itself while moving down
        direction="up"
      >
        <form netlify>
          <label for="fname">First name:</label>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" />
          <button type="submit"></button>
        </form>
      </Fade>
    </div>
  );
}

export default Programs;
