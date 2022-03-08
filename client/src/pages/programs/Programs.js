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
        <Form className={styles.pointsForm}>
        <Form.Group  controlId="formBasicEmail">
    <Form.Label>الاسم</Form.Label>
                            <Form.Control
                          as="select"
                          className={styles.input}
                        >
                          <option>عبدالكريم الرملاوي </option>
                          <option>أحمد نايفة</option>
                          <option>حسين التوبة</option>
                        </Form.Control>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
          </Button>
          </Form>
      </Fade>
    </div>
  );
}

export default Programs;
