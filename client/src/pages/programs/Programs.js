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
        <Form netlify className={styles.pointsForm}>
        <Form.Group  controlId="formBasicEmail">
    <Form.Label>الاسم</Form.Label>
<Form.Select aria-label="Default select example">
  <option>اختر اسمك</option>
  <option value="1">عبدالكريم</option>
  <option value="2">محمد</option>
  <option value="3">صالح</option>
</Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    تسليم
          </Button>
          </Form>
      </Fade>
    </div>
  );
}

export default Programs;
