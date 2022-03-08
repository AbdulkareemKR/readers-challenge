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
        <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
      </Fade>
    </div>
  );
}

export default Programs;
